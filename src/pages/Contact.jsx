// src/pages/Contact.jsx
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Merci pour votre message !");
    setFormData({ name: "", message: "" });
  };

  return (
    <div className="contact-page container py-8">
      <h2 className="text-3xl font-bold text-green-800 mb-6">📞 Contactez-nous</h2>
      <p className="mb-2"><strong>📧 Email :</strong> contact@naturel.com</p>
      <p className="mb-2"><strong>📍 Adresse :</strong> 123 Rue Bio, Montréal, QC</p>
      <p className="mb-6"><strong>📞 Téléphone :</strong> +1 (514) 123‑4567</p>

      <h3 className="text-xl font-semibold mb-2">📝 Laissez-nous un message</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nom</label>
          <input
            type="text"
            name="name"
            placeholder="Votre nom"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Message</label>
          <textarea
            name="message"
            placeholder="Votre message..."
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}
