import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const savedDarkMode = localStorage.getItem('darkMode') === 'true';
  const [darkMode, setDarkMode] = useState(savedDarkMode);
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 bg-gray-200 dark:bg-gray-700 rounded-lg"
    >
      {darkMode ? '🌙' : '☀️'}
    </button>
  );
}
