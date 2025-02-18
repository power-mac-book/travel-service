import React, { useState } from "react";

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b last:border-none">
      <button
        className="w-full text-left p-3 font-semibold flex justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <span>{isOpen ? "▲" : "▼"}</span>
      </button>
      {isOpen && <div className="p-3">{children}</div>}
    </div>
  );
};

export default AccordionItem;
