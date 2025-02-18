import { Router } from "express";
import multer from "multer";
import Document from "../models/Document.js";
import { verifyToken } from "../middleware/authMiddleware.js";
import { fileURLToPath } from "url";
import { dirname } from "path";
import fs from "fs";

const router = Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = `${__dirname}/../uploads/`;
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage });

// Upload API
router.post("/upload",verifyToken, upload.single("file"), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: "No file uploaded" });

    const { documentType } = req.body;
    const allowedTypes = ["passport", "visa", "ticket"];
    if (!allowedTypes.includes(documentType)) {
      return res.status(400).json({ message: "Invalid document type" });
    }

    const newDocument = new Document({
      userId: req.user.id,
      documentType,
      fileUrl: `/uploads/${req.file.filename}`
    });

    await newDocument.save();
    res.status(201).json({ message: "Document uploaded successfully", document: newDocument });
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
});

export default router;
