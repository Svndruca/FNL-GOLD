import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import AudioPlayer from "./AudioPlayer"; // Importamos el reproductor

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        {/* Íconos de Redes Sociales */}
        <div className="footer__social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
        </div>

        {/* Tarjeta de Control de Medios */}
        <div className="media__card">
          <h4>Playlist Oficial</h4>
          <AudioPlayer />
        </div>
      </div>
    </footer>
  );
}
