import React from "react";
import { RiFlightTakeoffFill } from "react-icons/ri";
import { FaTrain } from "react-icons/fa6";
import { FaBusAlt } from "react-icons/fa";
import { FaTaxi } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import AlertButtom from "./AlertButtom";
import { IonButton } from "@ionic/react";
interface ContainerProps {
  title: string;
  //   Icon: React.ReactElement;
}
const ItemIcon: React.FC<ContainerProps> = ({ title }) => {
  return (
    <div className="flex flex-col items-center gap-y-2">
      <IonButton
        id={title}
        // size="medium"
        color="rgb(241 245 249)"
        className="bg-slate-100 rounded-full">
        {/* </div>className="bg-slate-100 rounded-full p-4"> */}
        {/* <button className="bg-slate-100 rounded-full p-4"> */}
        <AlertButtom id={title} />
        {title === "Fligths" ? (
          <RiFlightTakeoffFill color="rgb(8 145 178)" />
        ) : title === "Train" ? (
          <FaTrain color=" rgb(52 211 153)" />
        ) : title == "Bus" ? (
          <FaBusAlt color="rgb(29 78 216)" />
        ) : title == "Taxi" ? (
          <FaTaxi color="rgb(251 191 36)" />
        ) : (
          <BsThreeDots color="blue" />
        )}
        {/* </button> */}
      </IonButton>
      <p>{title}</p>
    </div>
  );
};

export default ItemIcon;
