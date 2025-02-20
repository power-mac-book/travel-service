import React, { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { FaUser, FaPlane, FaFileUpload, FaChevronDown, FaChevronUp } from "react-icons/fa";

const TravelerDetails = ({ travelers }) => {
  const [expandedTraveler, setExpandedTraveler] = useState(null);

  const toggleTraveler = (index) => {
    setExpandedTraveler(expandedTraveler === index ? null : index);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Traveler Details</h1>
      <div className="space-y-4">
        {travelers.map((traveler, index) => (
          <Card key={index} className="p-4 border rounded-lg shadow-md">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleTraveler(index)}
            >
              <h2 className="text-lg font-semibold flex items-center gap-2">
                <FaUser /> {traveler.firstName} {traveler.lastName}
              </h2>
              {expandedTraveler === index ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {expandedTraveler === index && (
              <CardContent className="mt-4">
                <p><strong>Middle Name:</strong> {traveler.middleName || "N/A"}</p>
                <p><strong>Telephone:</strong> {traveler.telephone}</p>
                <p><strong>Email:</strong> {traveler.email}</p>
                <p><strong>Airline:</strong> {traveler.airlineName}</p>
                <p><strong>Frequent Flyer Number:</strong> {traveler.frequentFlyerNumber || "N/A"}</p>
                <h3 className="mt-4 font-semibold">Uploaded Documents:</h3>
                <ul className="list-disc pl-5">
                  {traveler.documents.map((doc, docIndex) => (
                    <li key={docIndex} className="flex items-center gap-2">
                      <FaFileUpload /> <a href={doc.url} target="_blank" rel="noopener noreferrer" className="text-blue-500">{doc.type}</a>
                    </li>
                  ))}
                </ul>
                <h3 className="mt-4 font-semibold">Family Members:</h3>
                <div className="space-y-2">
                  {traveler.familyMembers.map((member, memberIndex) => (
                    <Card key={memberIndex} className="p-3 border rounded-lg">
                      <p><strong>Name:</strong> {member.firstName} {member.lastName}</p>
                      <p><strong>Telephone:</strong> {member.telephone}</p>
                      <p><strong>Email:</strong> {member.email}</p>
                    </Card>
                  ))}
                </div>
              </CardContent>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TravelerDetails;
