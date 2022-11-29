import Image from "next/image";
import React from "react";

const MediumCard = ({ item }) => {
  return (
    <div className="flex flex-col cursor-pointer hover:scale-105 transform transition duration-200 ease-out">
      <div className="relative h-80 w-80">
        <Image src={item.img} alt="img" layout="fill" className="rounded-xl" />
      </div>
      <p className="text-2xl mt-3">{item.title}</p>
    </div>
  );
};

export default MediumCard;
