import React, { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import  Button  from "../components/ui/Button";
import  Input  from "../components/ui/input";
import { FaUserPlus, FaUpload } from "react-icons/fa";
import Accordion from "../components/ui/Accordion";
import AccordionItem from "../components/ui/AccordionItem";

const TravelerInfoPage = () => {
  const [travelers, setTravelers] = useState([
    { firstname: "", middlename: "", lastname: "", phone: "", email: "", airline: "", flyerNumber: "", documents: {} },
  ]);

  const handleChange = (index, field, value) => {
    const updatedTravelers = [...travelers];
    updatedTravelers[index][field] = value;
    setTravelers(updatedTravelers);
  };

  const handleFileUpload = (index, docType, file) => {
    const updatedTravelers = [...travelers];
    updatedTravelers[index].documents[docType] = file;
    setTravelers(updatedTravelers);
  };

  const addTraveler = () => {
    setTravelers([...travelers, { firstname: "", middlename: "", lastname: "", phone: "", email: "", airline: "", flyerNumber: "", documents: {} }]);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Traveler Information</h1>
      <Accordion type="single" collapsible>
        {travelers.map((traveler, index) => (
          <AccordionItem key={index} value={`traveler-${index}`}>
            <Card>
              <CardContent className="p-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    placeholder="First Name"
                    value={traveler.firstname}
                    onChange={(e) => handleChange(index, "firstname", e.target.value)}
                  />
                  <Input
                    placeholder="Middle Name"
                    value={traveler.middlename}
                    onChange={(e) => handleChange(index, "middlename", e.target.value)}
                  />
                  <Input
                    placeholder="Last Name"
                    value={traveler.lastname}
                    onChange={(e) => handleChange(index, "lastname", e.target.value)}
                  />
                  <Input
                    placeholder="Phone Number"
                    value={traveler.phone}
                    onChange={(e) => handleChange(index, "phone", e.target.value)}
                  />
                  <Input
                    placeholder="Email"
                    type="email"
                    value={traveler.email}
                    onChange={(e) => handleChange(index, "email", e.target.value)}
                  />
                  <Input
                    placeholder="Airline Name"
                    value={traveler.airline}
                    onChange={(e) => handleChange(index, "airline", e.target.value)}
                  />
                  <Input
                    placeholder="Frequent Flyer Number"
                    value={traveler.flyerNumber}
                    onChange={(e) => handleChange(index, "flyerNumber", e.target.value)}
                  />
                </div>
                <div className="mt-4">
                  <p className="font-semibold">Upload Documents</p>
                  <input type="file" onChange={(e) => handleFileUpload(index, "passport", e.target.files[0])} />
                  <input type="file" onChange={(e) => handleFileUpload(index, "aadhar", e.target.files[0])} className="mt-2" />
                  <input type="file" onChange={(e) => handleFileUpload(index, "misc", e.target.files[0])} className="mt-2" />
                </div>
              </CardContent>
            </Card>
          </AccordionItem>
        ))}
      </Accordion>
      <Button onClick={addTraveler} className="mt-4 flex items-center">
        <FaUserPlus className="mr-2" /> Add Family Member
      </Button>
    </div>
  );
};

export default TravelerInfoPage;
