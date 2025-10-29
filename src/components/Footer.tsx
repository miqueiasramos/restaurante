import React from "react";

export default function Footer({ name }: { name: string }) {
  return (
    <footer className="footer">
      © {new Date().getFullYear()} {name} — Todos os direitos reservados.
    </footer>
  );
}
