import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const FullPizza: React.FC = () => {
  const [pizza, setPizza] = React.useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          `https://67b2f30ebc0165def8cf45b6.mockapi.io/items/` + id
        );
        setPizza(data);
      } catch (err) {
        console.error("Ошибка при открытие пиццы " + err);
        navigate("/");
      }
    }
    fetchPizza();
  }, []);

  if (!pizza) {
    return <h2>Секунду...</h2>;
  }

  return (
    <div className="container">
      <div className="container--fullpizza">
        <img src={pizza.imageUrl} alt={pizza.title} className="pizza-image" />
        <h2>{pizza.title}</h2>
        <p>Очень вкусная пицца 🍕</p>
        <span className="pizza-price">{pizza.price} ₽</span>
        <Link to={"/"}>
          <button className="button button--outline button--add">
            <span>Назад</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FullPizza;
