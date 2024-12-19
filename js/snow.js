const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://cdn.jsdelivr.net/gh/Alaev-Co/snowflakes/dist/snow.min.css';
document.head.appendChild(link);
const script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/gh/Alaev-Co/snowflakes/dist/Snow.min.js';
script.onload = () => {
    new Snow();
};
document.body.appendChild(script);
