import React from "react";

const Categories = () => {
  const [activeCategory, setActiveCategory] = React.useState(0);
  const catigories = [
    "Все",
    "Мясные",
    "Вегетарианские",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  const onClickCategory = (index) => {
    setActiveCategory(index);
  };

  return (
    <div className="categories">
      <ul>
        {catigories.map((value, i) => (
          <li
            key={value}
            onClick={() => onClickCategory(i)}
            className={activeCategory === i ? "active" : ""}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
