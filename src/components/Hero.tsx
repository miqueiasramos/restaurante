import React, { useEffect } from "react";

export default function Hero({ name }: { name: string }) {
  useEffect(()=> {
    const onScroll = () => {
      const y = Math.round(window.scrollY / 5);
      document.documentElement.style.setProperty('--scroll', `${y}px`);
    };
    window.addEventListener('scroll', onScroll);
    return ()=> window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <section id="home" className="hero">
      <div className="content">
        <h1>{name} — Sabores que encantam</h1>
        <p>Experimente o melhor da culinária com ingredientes frescos e paixão na cozinha.</p>
        <a className="btn" href="#menu">Ver Cardápio</a>
      </div>
    </section>
  );
}
