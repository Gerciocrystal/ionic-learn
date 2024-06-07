import { IonCol, IonGrid, IonRow } from "@ionic/react";
import React from "react";
import "./menuItem.css";
const MenuItem: React.FC = () => {
  return (
    <div className="menu-content-header">
      <IonGrid>
        <IonRow>
          <IonCol>1</IonCol>
          <IonCol>2</IonCol>
          <IonCol>3</IonCol>
        </IonRow>
      </IonGrid>
    </div>
  );
};

export default MenuItem;
