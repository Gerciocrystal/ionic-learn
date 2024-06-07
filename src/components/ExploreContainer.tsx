import "./ExploreContainer.css";
import Destination from "./misselation/Destination";

interface ContainerProps {
  name: string;
}
const data = [
  {
    id: 1,
    image:
      "https://th.bing.com/th/id/OIP.tcje5CxNANcgv2alX_fWcAHaEK?rs=1&pid=ImgDetMain",
    rate: 4.5,
    title: "Cancum",
    price: 2300,
  },
  {
    id: 2,
    image:
      "https://th.bing.com/th/id/OIP.pi777_IgMLolCNeNCXwUhwHaF-?rs=1&pid=ImgDetMain",
    rate: 3.5,
    title: "Praia",
    price: 5300,
  },
];
const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container p-5 bg-slate-100">
      <div className="flex justify-between align-center">
        <strong className="text-lg">Popular destination</strong>
        <p className="text-blue-500">view all</p>
      </div>
      <div className="flex justify-between ">
        {data.map((d) => (
          <Destination
            key={d?.id}
            image={d?.image}
            rate={d?.rate}
            price={d?.price}
            title={d?.title}
          />
        ))}
      </div>
    </div>
  );
};

export default ExploreContainer;
