import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Check localStorage for the theme preference
    let storedTheme;
    if (typeof window !== "undefined") {
      storedTheme = localStorage.getItem("theme");
    } else {
      storedTheme = "light";
    }
    return storedTheme;
  });

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    // Save the theme preference to localStorage
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    // Apply the theme preference when the component mounts
    document.body.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export { ThemeProvider, useTheme };
