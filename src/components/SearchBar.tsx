import React from "react";
import "./SearchBar.css";
import { IonInput } from "@ionic/react";
const SearchBar: React.FC = () => {
  return (
    <div className="serch-content">
      <IonInput
        label="Solid input"
        labelPlacement="floating"
        class="custom"
        fill="solid"
        placeholder="Enter text"></IonInput>
    </div>
  );
};

export default SearchBar;
