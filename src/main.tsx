import React from "react";
import { createRoot } from "react-dom/client";
import GameApp from "@/components/GameApp";
import AdminApp from "@/components/AdminApp";
import "@/app/globals.css";

document.documentElement.style.setProperty(
  "--portrait-sheet",
  `url("${import.meta.env.BASE_URL}og-career-game.png")`,
);

function Root() {
  const [route, setRoute] = React.useState(() => window.location.hash || "#/");

  React.useEffect(() => {
    const onHashChange = () => setRoute(window.location.hash || "#/");
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return route.startsWith("#/admin") ? <AdminApp /> : <GameApp />;
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
);
