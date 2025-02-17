import React from "react";
import "./scss/app.scss";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock";
import Skeleton from "./components/PizzaBlock/Skeleton";
// import pizzas from "./assets/pizzas.json";

function App() {
  const [items, setItems] = React.useState([]);
  const [isLoading, setisLoading] = React.useState(true);

  React.useEffect(() => {
    fetch("https://67b2f30ebc0165def8cf45b6.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
        setisLoading(false);
      });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {isLoading
              ? [...new Array(8)].map((_, i) => <Skeleton key={i} />)
              : items.map((obj) => <PizzaBlock key={obj.name} {...obj} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
