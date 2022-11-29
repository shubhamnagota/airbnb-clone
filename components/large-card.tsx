import Image from "next/image";
import React from "react";

const LargeCard = ({ img, title, description, buttonText }) => {
  return (
    <div className="relative h-96 min-w-[300px]">
      <Image src={img} alt="img" layout="fill" className="rounded-2xl" objectFit="cover" />
      <div className="absolute top-32 left-12">
        <h2 className="text-4xl text-semibold mb-3 w-64">{title}</h2>
        <p className="text-sm">{description}</p>
        <button className="bg-gray-900 text-white text-sm rounded-lg px-4 py-2 mt-5">{buttonText}</button>
      </div>
    </div>
  );
};

export default LargeCard;
