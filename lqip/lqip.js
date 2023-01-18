window.addEventListener('load', () => {
  const deferredImages = [...document.getElementsByTagName('img')];
  for (deferredImage of deferredImages) {
    if (deferredImage.getAttribute('data-src')) {
      deferredImage.setAttribute('src', deferredImage.getAttribute('data-src'));
    }
  }
});
