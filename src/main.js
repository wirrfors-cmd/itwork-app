import { Capacitor } from '@capacitor/core';

console.log('App loaded on platform:', Capacitor.getPlatform());

// Инициализация приложения
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded');
});
