var cacheName = 'mws-andikatata';
var filesToCache = [
    '/',
    'index.html',
    'images/logo.png',
    'images/myfoto2.jpg',
    'project1/add2numbers.html',
    'project1/add2numbers.js',
    'project2/index.html',
    'project2/css/peta.css',
    'project2/images/urban-pop-cafe.jpg',
    'project2/images/CAFFEE.png',
    'project2/images/warkop-ranggayo.jpg',
    'project2/images/kopikan mlg.jpg',
    'project2/images/kafe endorse.jpg',
    'project2/images/nomaden coffee.jpg',
    'project2/images/21 coffee.jpg',
    'project2/js/peta.js',
    'project3/images/21 coffee.jpg',
    'project3/images/CAFFEE.png',
    'project3/images/kafe endorse.jpg',
    'project3/images/nomaden coffee.jpg',
    'project3/images/urban-pop-cafe.jpg',
    'project3/images/warkop-ranggayo.jpg',
    'project3/js/peta.js',
    'project3/css/peta.css',
    'project4/css/map.css',
    'project4/images/CAFFEE.png',
    'project4/images/nomaden.png',
    'project4/js/map.js',
    'project4/index.html',
];

self.addEventListener('install', function(e) {
    console.log('Service Worker Install');
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            console.log('Service Worker Caching App Shell');
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener('activate',  event => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request, {ignoreSearch:true}).then(response => {
            return response || fetch(event.request);
        })
    );
});