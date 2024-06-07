import React from "react";
import { IoIosStar } from "react-icons/io";
interface destination {
  image: string;
  rate: number;
  title: string;
  price: number;
}
const Destination: React.FC<destination> = ({ image, rate, title, price }) => {
  return (
    <div className="p-2 bg-white rounded-12 flex flex-col justify-between shadow-pink mx-1 gap-1">
      <img src={image} alt={title} className="rounded-12 w-full h-16" />

      <p className="text-inherit">{title}</p>

      <div className="flex justify-between">
        <strong className="flex gap-2">
          <IoIosStar color="orange" />
          <p>{rate}</p>
        </strong>
        <p className="text-inherit">3D 2N</p>
      </div>
      <div className="flex justify-between gap-1">
        <p className="text-inherit">Start From</p>
        <p className=" text-cyan-500">${price}</p>
      </div>
    </div>
  );
};

export default Destination;
