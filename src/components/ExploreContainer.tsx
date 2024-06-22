import { useQuery } from "react-query";
import "./ExploreContainer.css";
import Destination from "./misselation/Destination";
import TitleItem from "./misselation/TitleItem";
import { useState } from "react";
import BackService from "../service/BackService";
import { useIonToast } from "@ionic/react";

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [present] = useIonToast();
  const queryProducts = useQuery({
    queryKey: ["query-product", currentPage],
    queryFn: () => BackService.getProducts(4, currentPage),
  });
  if (queryProducts.isError) {
    const errorMessage =
      queryProducts.error instanceof Error
        ? queryProducts.error.message
        : "Erro no servidor";
    present({
      message: errorMessage || "Erro no servidor",
      duration: 1500,
      position: "top",
    });
  }
  const products = queryProducts?.data?.data?.data || {};
  console.log(products);
  return (
    <div className="container py-5 px-2 bg-slate-100">
      <TitleItem title={"Popular destination"} />

      <div className="flex justify-between flex-col gap-4">
        {products.map((d: any) => (
          <Destination
            key={d?.id}
            image={d?.imageUrl}
            rate={d?.rate}
            price={d?.price}
            title={d?.name}
          />
        ))}
      </div>
    </div>
  );
};

export default ExploreContainer;
