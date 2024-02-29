import { createContext, useContext, useState } from 'react';

const MenuFilterContext = createContext();

export const useMenu = () => {
  return useContext(MenuFilterContext);
};

export const MenuProvider = ({ children }) => {
  const [menuFilter, setMenuFilter] = useState("Deal");

  const toggleMenu = (title) => {
    setMenuFilter(title);
  };

  return (
    <MenuFilterContext.Provider value={{ menuFilter, toggleMenu }}>
      {children}
    </MenuFilterContext.Provider>
  );
};

