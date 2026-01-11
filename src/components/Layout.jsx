import { Outlet } from "react-router";
import NavBar from "./NavBar";
import Footer from "./Footer";

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