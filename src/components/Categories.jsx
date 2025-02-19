import React from "react";

const Categories = ({ value, onClickCategory }) => {
  // const [activeCategory, setActiveCategory] = React.useState(0);
  const catigories = [
    "Все",
    "Мясные",
    "Вегетарианские",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  // const onClickCategory = (index) => {
  //   setActiveCategory(index);
  // };

  return (
    <div className="categories">
      <ul>
        {catigories.map((category, i) => (
          <li
            key={category}
            onClick={() => onClickCategory(i)}
            className={value === i ? "active" : ""}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
