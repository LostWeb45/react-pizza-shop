import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const FullPizza = () => {
  const [pizza, setPizza] = React.useState();
  const { id } = useParams();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          `https://67b2f30ebc0165def8cf45b6.mockapi.io/items/` + id
        );
        setPizza(data);
      } catch (err) {
        console.error("Ошибка при открытие пиццы " + err);
      }
    }
    fetchPizza();
  }, []);

  return (
    <div className="container">
      {/* <img src={pizza.imageUrl} /> */}
      <h2>Название пиццы</h2>
      <p>Описание состава пиццы</p>
    </div>
  );
};

export default FullPizza;
