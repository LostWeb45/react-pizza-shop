// import { useWhyDidYouUpdate } from "ahooks";
import React from "react";

type CategoriesProps = {
  value: number;
  onClickCategory: (i: number) => void;
};

const catigories = [
  "Все",
  "Мясные",
  "Вегетарианские",
  "Гриль",
  "Острые",
  "Закрытые",
];

export const Categories: React.FC<CategoriesProps> = React.memo(
  ({ value, onClickCategory }) => {
    // const [activeCategory, setActiveCategory] = React.useState(0);

    // const onClickCategory = (index) => {
    //   setActiveCategory(index);
    // };
    // useWhyDidYouUpdate("Categories", { value, onClickCategory });

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
  }
);
