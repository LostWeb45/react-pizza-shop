import React from "react";

const Categories = () => {
  const [activeCategory, setActiveCategory] = React.useState(0);

  const onClickCategory = () => {
    setActiveCategory(1);
  };
  return (
    <div className="categories">
      <ul>
        <li
          onClick={() => onClickCategory()}
          className={activeCategory === 0 ? "active" : ""}
        >
          Все
        </li>
        <li
          onClick={onClickCategory}
          className={activeCategory === 1 ? "active" : ""}
        >
          Мясные
        </li>
        <li
          onClick={onClickCategory}
          className={activeCategory === 2 ? "active" : ""}
        >
          Вегетарианская
        </li>
        <li
          onClick={onClickCategory}
          className={activeCategory === 3 ? "active" : ""}
        >
          Гриль
        </li>
        <li
          onClick={onClickCategory}
          className={activeCategory === 4 ? "active" : ""}
        >
          Острые
        </li>
        <li
          onClick={onClickCategory}
          className={activeCategory === 5 ? "active" : ""}
        >
          Закрытые
        </li>
      </ul>
    </div>
  );
};

export default Categories;
