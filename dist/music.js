const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: false,
    autoplay: true,
    theme: '#b7daff',
    loop: 'all',
    order: 'list',
    preload: 'auto',
    volume: 0.7,
    mutex: true,
    listFolded: false,
    listMaxHeight: '200px',
    lrcType: 3,
    audio: [
      {
        name: "僕は僕を好きになる",
        artist: '乃木坂46',
        url: 'whyp.it/t/1-01-26596',
        cover: 'https://i.postimg.cc/ZqTXjHMj/cover.jpg',
        lrc: '',
      },
      {
        name: '明日がある理由',
        artist: '乃木坂46',
        url: 'whyp.it/t/9193720438',
        cover: 'https://i.postimg.cc/ZqTXjHMj/cover.jpg',
        lrc: ''
      }
    ]
});