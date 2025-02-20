import React from "react";

const Card = ({ children }) => {
  return <div className="border p-4 rounded-lg shadow bg-white">{children}</div>;
};

const CardHeader = ({ children }) => {
  return <div className="p-4 border-b">{children}</div>;
};

const CardTitle = ({ children }) => {
  return <h2 className="text-lg font-semibold">{children}</h2>;
};

const CardContent = ({ children }) => {
  return <div className="p-2">{children}</div>;
};

export { Card, CardHeader, CardTitle, CardContent };
