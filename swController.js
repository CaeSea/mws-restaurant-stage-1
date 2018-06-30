const ServiceWorker = function() {};

ServiceWorker._registerServiceWorker = function() {
  if(!navigator.serviceWorker) return;

  navigator.serviceWorker.register('/sw.js').then(function() {
    console.log('Service Worker Registered.');
  })
  .catch(function() {
    console.log('Error registering service worker.');
  })
};

ServiceWorker._registerServiceWorker();
