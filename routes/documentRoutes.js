import { Router } from 'express';
import multer from 'multer';
import Document from '../models/Document.js';
import { verifyToken } from '../middleware/authMiddleware.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';

const router = Router();

// Get the absolute path of the current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Define upload path
const uploadPath = `${__dirname}/../uploads/`;

// ✅ Check if "uploads" folder exists, if not, create it
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
  console.log('📁 Uploads folder created at:', uploadPath);
}

// Multer Storage Configuration (uploads to 'uploads/' folder)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = `${__dirname}/../uploads/`;
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); // Unique filename
  }
});

const upload = multer({ storage });

// 🔹 Upload Document API
router.post('/upload', verifyToken, upload.single('file'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: 'No file uploaded' });

    const { documentType } = req.body;
    const allowedTypes = ['passport', 'visa', 'ticket'];
    if (!allowedTypes.includes(documentType)) {
      return res.status(400).json({ message: 'Invalid document type' });
    }

    const newDocument = new Document({
      userId: req.user.id,
      documentType,
      fileUrl: `/uploads/${req.file.filename}`
    });

    await newDocument.save();
    res.status(201).json({ message: 'Document uploaded successfully', document: newDocument });
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
});

// 🔹 Get All Documents for User
router.get('/', verifyToken, async (req, res) => {
  try {
    const documents = await Document.find({ userId: req.user.id });
    res.json(documents);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// 🔹 Delete a Document
router.delete('/:id', verifyToken, async (req, res) => {
  try {
    const document = await Document.findById(req.params.id);
    if (!document) return res.status(404).json({ message: 'Document not found' });

    // Ensure user owns the document
    if (document.userId.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    // Delete file from storage
    const filePath = `${__dirname}/../${document.fileUrl}`;
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    await document.deleteOne();
    res.json({ message: 'Document deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
});

export default router;
