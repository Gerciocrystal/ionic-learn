import {
  IonMenuButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonAvatar,
  IonItem,
  IonLabel,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";
import MenuComponect from "../components/MenuComponect";
import SearchBar from "../components/SearchBar";
import MenuItem from "../components/MenuItem";

const Tab1: React.FC = () => {
  return (
    <>
      <MenuComponect />
      <IonPage id="main-content">
        <div className="wrapper-main">
          <IonItem color="transparent" style={{ borderBottom: "none" }}>
            <IonAvatar>
              <img
                alt="Silhouette of a person's head"
                src="https://ionicframework.com/docs/img/demos/avatar.svg"
              />
            </IonAvatar>
            <div className="welcome">
              <p className="name-welcome">Welcome back</p>
              <p className="name-class">Gercio Bande</p>
            </div>
          </IonItem>
          <IonButtons>
            <IonMenuButton className="humburger"></IonMenuButton>
          </IonButtons>
          {/* Componects extern */}
          <SearchBar />
          <MenuItem />
        </div>
        <IonContent fullscreen className="ion-padding " color="light">
          <ExploreContainer name="Tab 1 page 2" />
        </IonContent>
      </IonPage>
    </>
  );
};

export default Tab1;
