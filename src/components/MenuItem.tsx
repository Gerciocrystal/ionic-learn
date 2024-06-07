import { IonCol, IonGrid, IonRow } from "@ionic/react";
import React from "react";
import "./menuItem.css";
import ItemIcon from "./misselation/ItemIcon";

const MenuItem: React.FC = () => {
  return (
    <div className="menu-content-header">
      <div className="flex justify-around">
        <ItemIcon title="Fligths" />
        <ItemIcon title="Train" />
        <ItemIcon title="Bus" />
        <ItemIcon title="Taxi" />
        <ItemIcon title="More" />
      </div>
    </div>
  );
};

export default MenuItem;
