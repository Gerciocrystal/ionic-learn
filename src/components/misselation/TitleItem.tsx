import React from "react";
interface titleItem {
  title: string;
}

const TitleItem: React.FC<titleItem> = ({ title }) => {
  return (
    <div className="flex justify-between align-center pb-2">
      <strong className="text-lg">{title}</strong>
      <p className="text-blue-500 ">view all</p>
    </div>
  );
};
export default TitleItem;
