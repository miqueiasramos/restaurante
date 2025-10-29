import React from "react";

export default function Contact(){
  return (
    <section id="contact" className="section">
      <h2>Contato</h2>
      <p>📍 Rua das Flores, 123 — São Paulo, SP</p>
      <p>📞 (77) 98888-7826</p>
      <form className="contact-form" onSubmit={(e)=>{ e.preventDefault(); alert('Mensagem enviada — exemplo'); }}>
        <input type="text" placeholder="Seu nome" required />
        <input type="email" placeholder="Seu e-mail" required />
        <textarea placeholder="Sua mensagem" required />
        <button className="btn" type="submit">Enviar</button>
      </form>
    </section>
  );
}
