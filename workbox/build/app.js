if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('./sw.js')
    .then(() => console.log('Service Worker is good to go'))
    .catch((error) => console.error(error));
}
