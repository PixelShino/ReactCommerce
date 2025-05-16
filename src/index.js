import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Проверяем предпочтения темы при загрузке
const initTheme = () => {
  // Проверяем сохраненную тему или системные предпочтения
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

// Инициализируем тему до рендеринга приложения
initTheme();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);