import { Route, Routes } from "react-router-dom";
import App from "./App";
import MainLayout from "./layouts/main-layout";
import Checkout from "./pages/checkout";
import Home from "./pages/home";
import Success from "./pages/success";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
      </Route>
    </Routes>
  );
}
