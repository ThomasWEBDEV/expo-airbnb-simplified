import { createContext, useContext, useState } from "react";

const FavorisContext = createContext(null);

export function FavorisProvider({ children }) {
  const [favorisIds, setFavorisIds] = useState([]);

  function toggleFavori(id) {
    setFavorisIds((ids) =>
      ids.includes(id) ? ids.filter((item) => item !== id) : [...ids, id]
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

export function useFavoris() {
  return useContext(FavorisContext);
}
