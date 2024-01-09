import React from "react";

interface CardProps {
  name: string;
  value: string;
}

const Card: React.FC<CardProps> = ({ name, value }) => {
  return (
    <>
      <div>
        <div className="p-4  border-green-400 rounded-md shadow-md border-l-8">
          <p className="text-xl font-bold">{value}</p>
          <h2 className="text-lg font-semibold mb-2">{name}</h2>
        </div>
      </div>
    </>
  );
};

export default Card;