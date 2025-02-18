import React from "react";
import { Card, CardContent } from "../components/ui/card";
import  Button  from "../components/ui/Button";
import { FaSearch, FaPlaneDeparture, FaGlobe, FaHotel } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const TravelerLandingPage = () => {
   const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] bg-cover bg-center flex items-center justify-center text-white text-4xl font-bold"
        style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?travel')" }}>
        <div className="bg-black bg-opacity-50 p-6 rounded-lg">
          Explore the World with Ease ✈️🌍
        </div>
      </div>
      <Link to="/signup">
        <button>Signup</button>
      </Link>
      <Link to="/login">
        <button>Login</button>
      </Link>
      {/* Search Bar */}
      <div className="flex mt-6 bg-white p-3 rounded-lg shadow-md w-[80%] max-w-2xl">
        <input
          type="text"
          placeholder="Search destinations..."
          className="w-full p-2 rounded-l-lg border-none outline-none"
        />
        <Button className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600">
          <FaSearch className="text-xl" />
        </Button>
      </div>
      const navigate = useNavigate();


    <div className="container">
    <h1>Traveler Landing Page</h1>
    
    {/* Button to go to Documents Page */}
    <button onClick={() => navigate("/documents")}>
      Go to Documents
    </button>
    </div>

      {/* Travel Features */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
        {/* Flights */}
        <Card className="p-4 text-center hover:shadow-lg transition">
          <CardContent>
            <FaPlaneDeparture className="text-4xl text-blue-500 mb-2" />
            <h3 className="text-lg font-semibold">Book Flights</h3>
            <p className="text-gray-600">Find the best deals on flights.</p>
          </CardContent>
        </Card>

        {/* Hotels */}
        <Card className="p-4 text-center hover:shadow-lg transition">
          <CardContent>
            <FaHotel className="text-4xl text-blue-500 mb-2" />
            <h3 className="text-lg font-semibold">Hotels & Stays</h3>
            <p className="text-gray-600">Discover amazing accommodations.</p>
          </CardContent>
        </Card>

        {/* Destinations */}
        <Card className="p-4 text-center hover:shadow-lg transition">
          <CardContent>
            <FaGlobe className="text-4xl text-blue-500 mb-2" />
            <h3 className="text-lg font-semibold">Top Destinations</h3>
            <p className="text-gray-600">Explore the best places to visit.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TravelerLandingPage;
