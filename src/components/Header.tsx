import React from "react";

type Props = {
  name: string;
  onChangeName: (v: string) => void;
  theme: "light"|"dark";
  setTheme: (t: "light"|"dark") => void;
};

export default function Header({ name, onChangeName, theme, setTheme }: Props) {
  return (
    <header className="header" role="banner">
      <div className="container">
        <div className="logo" aria-hidden>
          <svg viewBox="0 0 24 24" fill="none" aria-hidden>
            <circle cx="12" cy="12" r="10" fill="currentColor" style={{opacity:0.08}} />
            <path d="M6 12c2 0 3-3 6-3s4 3 6 3" stroke="currentColor" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {name}
        </div>

        <nav className="nav" aria-label="Main navigation">
          <a href="#home">Início</a>
          <a href="#menu">Cardápio</a>
          <a href="#about">Sobre</a>
          <a href="#contact">Contato</a>
        </nav>

        <div className="controls">
          <input
  
          />
          <button
            onClick={()=> setTheme(theme === "light" ? "dark" : "light")}
            title="Alternar tema"
            className="btn"
          >
            {theme === "light" ? "Escuro" : "Claro"}
          </button>
        </div>
      </div>
    </header>
  );
}
