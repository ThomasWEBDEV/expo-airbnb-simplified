// Vrai réseau : les 100 logements du gist (Internet nécessaire).
const URL =
  "https://gist.githubusercontent.com/Fabsforce/a76097aa83d4f5d1b3c5c9868e2d51d3/raw/25d6501b6a6969268b47b489b32629f2d0eb223d/logements.json";

export async function chargerLogements() {
  const res = await fetch(URL);
  // fetch ne rejette PAS sur une erreur HTTP (404, 500…) : c'est à nous de vérifier
  if (!res.ok) throw new Error(`Erreur HTTP ${res.status}`);
  return res.json();
}
