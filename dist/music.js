const ap = new APlayer({
container: document.getElementById('aplayer'),
fixed: true,
autoplay: true,
audio: [
{
name: '僕は僕を好きになる',
artist: '乃木坂46',
url: 'https://drive.google.com/uc?export=download&id=1KGc5LGaG8EAuQLaSOMyzQGXsqtEjz3Q7',
cover: 'https://i.postimg.cc/ZqTXjHMj/cover.jpg',
},
{
name: '友情ピアス',
artist: '乃木坂46',
url: 'https://drive.google.com/uc?export=download&id=1AfOcfTraQyZqLOqtcfyOlU3x_PA19JrQ',
cover: 'https://i.postimg.cc/ZqTXjHMj/cover.jpg',
}
]
});