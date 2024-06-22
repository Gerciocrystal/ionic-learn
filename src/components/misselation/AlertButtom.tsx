import { IonAlert, IonButton } from "@ionic/react";
import React from "react";

interface alertInterface {
  id: string;
}
const AlertButtom: React.FC<alertInterface> = ({ id }) => {
  return (
    <IonAlert
      trigger={id}
      header="A Short Title Is Best"
      subHeader="A Sub Header Is Optional"
      message="A message should be a short, complete sentence."
      buttons={["Action"]}></IonAlert>
  );
};
export default AlertButtom;
