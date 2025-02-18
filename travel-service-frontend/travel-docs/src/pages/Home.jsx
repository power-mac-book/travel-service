import React from "react";
import  Button  from "../components/ui/Button";
import { FaCloudUploadAlt, FaUsers, FaBriefcase } from "react-icons/fa";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-8 text-center space-y-8">
      <h1 className="text-4xl font-bold text-blue-600 max-w-3xl leading-tight">
        Streamline Your Travel Operations with a Centralized Document Hub
      </h1>
      <p className="text-lg text-gray-700 max-w-2xl">
        For Travel Agents & Travelers – Secure, Organized, and Accessible Anytime.
        No more lost documents or scattered files across WhatsApp and emails!
      </p>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center space-y-3">
          <FaUsers className="text-blue-500 text-5xl" />
          <h2 className="text-xl font-semibold">For Travelers</h2>
          <p className="text-gray-600 text-center">
            Easily upload, categorize, and access your travel documents anytime.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center space-y-3">
          <FaBriefcase className="text-blue-500 text-5xl" />
          <h2 className="text-xl font-semibold">For Agents</h2>
          <p className="text-gray-600 text-center">
            Automate document management, reduce back-office workload, and improve client satisfaction.
          </p>
        </div>
      </div>
      
      <section className="max-w-4xl">
        <h2 className="text-2xl font-bold text-gray-800">How It Works</h2>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">For Travelers</h3>
            <ul className="text-gray-600 mt-2 space-y-2">
              <li>✅ Upload and categorize essential travel documents.</li>
              <li>✅ Self-service portal eliminates back-and-forth with agents.</li>
              <li>✅ Access everything from a centralized app.</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">For Travel Agents</h3>
            <ul className="text-gray-600 mt-2 space-y-2">
              <li>✅ Reduce back-office workload.</li>
              <li>✅ Push travel itineraries, visas, and tickets directly to clients.</li>
              <li>✅ Store and share sample itineraries.</li>
              <li>✅ Send marketing content from a centralized dashboard.</li>
              <li>✅ Ensure client documents are not stored on agents’ phones.</li>
            </ul>
          </div>
        </div>
      </section>
      
      <section className="max-w-4xl">
        <h2 className="text-2xl font-bold text-gray-800">Key Features</h2>
        <ul className="text-gray-600 mt-4 space-y-2">
          <li>✔️ Traveler Self-Service Portal – Let travelers manage their own documents.</li>
          <li>✔️ Secure Cloud Storage – Keep all documents in one place.</li>
          <li>✔️ Automated Document Sharing – Send trip-related documents in seconds.</li>
          <li>✔️ Trip-Based Organization – Neatly categorize everything per trip.</li>
          <li>✔️ Marketing & Promotions – Push exclusive deals and offers to travelers.</li>
        </ul>
      </section>
      
      <section className="max-w-4xl">
        <h2 className="text-2xl font-bold text-gray-800">Why Choose Us?</h2>
        <ul className="text-gray-600 mt-4 space-y-2">
          <li>🚀 Boost Efficiency – Save hours of admin work with automated processes.</li>
          <li>🔒 Enhanced Security – No more client data stored on agents’ personal devices.</li>
          <li>📲 Centralized Access – Everything is organized in one easy-to-use platform.</li>
          <li>🤝 Stronger Client Relationships – Provide seamless service and a stress-free travel experience.</li>
        </ul>
      </section>
      
      <section className="max-w-4xl">
        <h2 className="text-2xl font-bold text-gray-800">Testimonials</h2>
        <ul className="text-gray-600 mt-4 space-y-2">
          <li>💬 "This platform has made travel planning so easy! I have all my documents in one place." – Frequent Traveler</li>
          <li>💬 "Our team has saved hours of manual work. Now we focus more on growing our business!" – Travel Agent</li>
        </ul>
      </section>
      
      <Button className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-700 shadow-md">
        👉 Get Started Today – Simplify Travel Document Management!
      </Button>
    </div>
  );
};

export default Home;
