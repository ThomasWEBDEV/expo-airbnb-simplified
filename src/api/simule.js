// Source simulée : les 12 logements locaux, sans Internet.
// On choisit le cas à démontrer : succes, lent, vide, erreur500.
import { logements } from "../data/logements";

export const MODES = ["succes", "lent", "vide", "erreur500"];
const DELAIS = { succes: 600, lent: 3000, vide: 600, erreur500: 600 };

let mode = "succes";
export function choisirMode(nouveauMode) {
  mode = nouveauMode;
}
export function modeActuel() {
  return mode;
}

// Imite fetch : renvoie une « réponse » avec ok, status et json()
function fetchSimule(m) {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (m === "erreur500") {
        resolve({ ok: false, status: 500, json: async () => ({ message: "Erreur serveur" }) });
      } else {
        resolve({ ok: true, status: 200, json: async () => (m === "vide" ? [] : logements) });
      }
    }, DELAIS[m]);
  });
}

// Même signature que api/gist.js : on passe de l'une à l'autre en changeant l'import
export async function chargerLogements() {
  const res = await fetchSimule(mode);
  if (!res.ok) throw new Error(`Erreur HTTP ${res.status}`);
  return res.json();
}

// E3.2 — recherche par ville avec un délai imposé (pour provoquer une réponse tardive)
export function rechercherParVille(ville, delai) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(logements.filter((l) => l.city.toLowerCase() === ville.toLowerCase()));
    }, delai);
  });
}
