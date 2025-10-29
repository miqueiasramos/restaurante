import React from "react";

const pratos = [
  { nome: "Spaghetti Carbonara", preco: "R$ 38,00", desc: "Massa caseira, pancetta e molho cremoso." },
  { nome: "Risoto de Cogumelos", preco: "R$ 42,00", desc: "Arborio, cogumelos frescos e parmesão." },
  { nome: "Lasanha Bolonhesa", preco: "R$ 40,00", desc: "Camadas generosas de queijo e molho." },
  { nome: "Bruschetta Classica", preco: "R$ 22,00", desc: "Pão artesanal, tomate e manjericão." },
];

export default function MenuSection(){
  return (
    <section id="menu" className="section">
      <h2>Nosso Cardápio</h2>
      <div className="menu-grid">
        {pratos.map((p,i)=>(
          <article key={i} className="card" aria-labelledby={`p-${i}`}>
            <h3 id={`p-${i}`}>{p.nome}</h3>
            <p>{p.desc}</p>
            <div style={{display:'flex',justifyContent:'space-between',marginTop:12,alignItems:'center'}}>
              <strong>{p.preco}</strong>
              <a className="btn" href="#contact">Pedir</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
