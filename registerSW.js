if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/vite-react-pwa-practice/sw.js', { scope: '/vite-react-pwa-practice/' })})}