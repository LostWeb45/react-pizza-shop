import React from "react";

import styles from "./NotFoundBlock.module.scss";

const NotFoundBlock = () => {
  return (
    <div>
      <h1>
        <span className={styles.root}>😞</span>
        <br />
        Ничего на найдено
      </h1>
    </div>
  );
};

export default NotFoundBlock;
