import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MenuSection from "./components/MenuSection";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [restaurantName, setRestaurantName] = useState("Bella Vita");
  const [theme, setTheme] = useState<"light" | "dark">("light");

  return (
    <div className={theme === "dark" ? "theme-dark" : "theme-light"}>
      <Header
        name={restaurantName}
        onChangeName={setRestaurantName}
        theme={theme}
        setTheme={setTheme}
      />
      <main>
        <Hero name={restaurantName} />
        <MenuSection />
        <About />
        <Contact />
      </main>
      <Footer name={restaurantName} />
    </div>
  );
}
