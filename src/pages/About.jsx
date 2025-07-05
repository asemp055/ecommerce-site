// src/pages/About.jsx
export default function About() {
  return (
    <div className="about-page container py-8">
      <h2 className="text-3xl font-bold text-green-800 mb-6">🌿 À propos de Naturium</h2>
      <p className="mb-4">
        Naturium est une boutique québécoise spécialisée dans les soins naturels solides : savons, baumes à lèvres, beurres corporels.
      </p>
      <p className="mb-4">
        Tous nos produits sont fabriqués à la main avec des ingrédients biologiques, locaux et durables. 
        Nous croyons en une beauté simple, responsable et respectueuse de votre peau 🌱.
      </p>
      <div className="mission-block bg-light-green p-4 rounded mt-6">
        <h3 className="text-xl font-semibold mb-2">💡 Notre mission</h3>
        <p>
          Offrir des soins respectueux du corps et de la planète, à travers des produits naturels, éthiques et faits avec amour 💚.
        </p>
      </div>
    </div>
  );
}
