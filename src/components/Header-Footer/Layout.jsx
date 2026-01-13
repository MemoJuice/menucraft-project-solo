import { Outlet } from "react-router";
import NavBar from "../Header-Footer/NavBar";
import Footer from "../Header-Footer/Footer";

export default function Layout() {
  return (
    <div>
      <NavBar />
      <div className="min-h-[calc(100dvh-112px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}