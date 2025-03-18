import React, { Suspense } from "react";

import "./scss/app.scss";
import Loadable from "react-loadable";
import Home from "./pages/Home";
import FullPizza from "./pages/FullPizza";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import NotFound from "./pages/NotFound";

// const Cart = React.lazy(
//   () => import(/*webpackChunkName: "Cart"*/ "./pages/Cart")
// );
// Элемент подключается, только когда он будет отрисовываться

const Cart = Loadable({
  loader: () => import(/*webpackChunkName: "Cart"*/ "./pages/Cart"),
  loading: () => <p>Собираем ваши пиццы, секунду.</p>,
});

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route
          path="/cart"
          element={
            <Suspense>
              <Cart />
            </Suspense>
          }
        />
        <Route path="/pizza/:id" element={<FullPizza />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
