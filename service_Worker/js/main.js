if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
        .register('sw_caches_pages.js')
        .then(res => console.log("Service worker: Registered successfully"))
        .catch(err=>console.log("ERROR: ",err));
    })
}