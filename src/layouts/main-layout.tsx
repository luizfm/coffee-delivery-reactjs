import { Outlet } from "react-router-dom";
import Header from "../components/header";

export function MainLayout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
