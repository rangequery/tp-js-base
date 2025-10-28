const produits = [
    { nom: "Chips", prix: 20, expireLe: "2027-02-13" },
    { nom: "Briquet", prix: 2, expireLe: "2030-01-01" },
    { nom: "Biscuit Vanille", prix: 4, expireLe: "2024-12-08" },
    { nom: "Cupcake", prix: 3, expireLe: "2026-09-10" },
    { nom: "Chargeur type C", prix: 80, expireLe: "2030-01-01" },

  ];
  
  const aujourdHui = new Date();

const valides  = produits.filter(p => new Date(p.expireLe) > aujourdHui);
const total = valides.reduce((s, p) => s + p.prix, 0);
console.log("Produits valides :", valides);
console.log("Total :", total, "DH");
