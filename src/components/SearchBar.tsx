import React from "react";
import "./SearchBar.css";
import { IonInput } from "@ionic/react";
import { IoSearchSharp } from "react-icons/io5";
import { BsFilterLeft } from "react-icons/bs";
const SearchBar: React.FC = () => {
  return (
    <div className="serch-content">
      <IoSearchSharp color="blue" fontSize="1.5rem" />
      <IonInput
        label="Paises"
        labelPlacement="floating"
        class="custom"
        fill="solid"
        placeholder="Procure por alguma coisa"></IonInput>
      <BsFilterLeft color="blue" fontSize="1.7rem" />
    </div>
  );
};

export default SearchBar;
