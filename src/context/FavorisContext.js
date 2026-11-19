import { createContext, useContext, useState } from "react";

const FavorisContext = createContext(null);

export function FavorisProvider({ children }) {
  const [favorisIds, setFavorisIds] = useState([]);

  function toggleFavori(id) {
    setFavorisIds((actuels) =>
      actuels.includes(id) ? actuels.filter((x) => x !== id) : [...actuels, id]
    );
  }

  function isFavori(id) {
    return favorisIds.includes(id);
  }

  return (
    <FavorisContext.Provider value={{ favorisIds, toggleFavori, isFavori }}>
      {children}
    </FavorisContext.Provider>
  );
}

export const useFavoris = () => useContext(FavorisContext);