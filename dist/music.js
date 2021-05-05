const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
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
        url: 'https://drive.google.com/uc?export=download&id=13Yod1vlKyzsx3JpW1pT_e9uoyLRuHJUQ',
        cover: 'https://i.postimg.cc/ZqTXjHMj/cover.jpg',
      },
      {
        name: '明日がある理由',
        artist: '乃木坂46',
        url: 'https://drive.google.com/uc?export=download&id=13Yod1vlKyzsx3JpW1pT_e9uoyLRuHJUQ',
        cover: 'https://i.postimg.cc/ZqTXjHMj/cover.jpg,
      }
    ]
});