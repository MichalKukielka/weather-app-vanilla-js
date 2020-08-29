export default function getImages(keyWords = '') {
  const query = keyWords.replace(' ', '-');
  const imagesKey = 'quOof21ERJ7etb5jcq3SSXK6itgqMk7aa14Mf9bzLv0';
  const url = `https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=${query}&client_id=${imagesKey}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      document.body.style.backgroundImage = `url('${data.urls.regular}')`;
    });
}
