(async () => {
  class NavBar extends HTMLElement {
    connectedCallback() {
      const isActive = 'active';
      this.innerHTML = `<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">LCP</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link ${
                window.location.pathname === '/' ? isActive : ''
              }" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link ${
                window.location.pathname === '/lazy.html' ? isActive : ''
              }" href="lazy.html">Lazy Loading</a>
            </li>
            <li class="nav-item">
              <a class="nav-link ${
                window.location.pathname === '/fetchpriority.html'
                  ? isActive
                  : ''
              }" href="fetchpriority.html">Fetch Priority</a>
            </li>
            <li class="nav-item">
              <a class="nav-link ${
                window.location.pathname === '/ssg.html' ? isActive : ''
              }" href="ssg.html">SSG</a>
            </li>
            <li class="nav-item">
              <a class="nav-link ${
                window.location.pathname === '/cloudinary.html' ? isActive : ''
              }" href="cloudinary.html">Cloudinary</a>
            </li>
            <li class="nav-item">
              <a class="nav-link ${
                window.location.pathname === '/all.html' ? isActive : ''
              }" href="all.html">All Together</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>`;
    }
  }
  window.customElements.define('nav-bar', NavBar);

  if (
    !window.location.pathname.includes('ssg') &&
    !window.location.pathname.includes('all')
  ) {
    console.log('location', window.location.pathname);
    const allPhotos = await (await fetch('photos.json')).json();
    const photos = allPhotos.slice(0, 5);
    const gallery = document.getElementById('gallery');
    const mainPhoto = photos.shift();

    // gallery
    // <div class="col-12 mb-1">
    //   <div class="lightbox">
    //     <img src="img/1.jpg" alt="Gallery image 1" class="active w-100" />
    //   </div>
    // </div>
    // <div class="col-3 mt-1">
    //   <img src="img/2.jpg" alt="Gallery image 1" class="w-100" />
    // </div>

    const mainPhotoContainerDiv = document.createElement('div');
    mainPhotoContainerDiv.classList.add('col-12', 'mb-1');
    const mainPhotoDiv = document.createElement('div');
    mainPhotoDiv.classList.add('mainphoto');
    const mainImg = new Image();
    mainImg.classList.add('active', 'w-100');
    if (window.location.pathname.includes('cloudinary')) {
      mainImg.src = `https://res.cloudinary.com/tamas-demo/image/upload/w_776,f_auto,q_auto/lcp/${mainPhoto.src}`;
    } else {
      mainImg.src = `img/${mainPhoto.src}`;
    }
    if (window.location.pathname.includes('lazy')) {
      mainImg.setAttribute('loading', 'lazy');
    }
    mainPhotoDiv.appendChild(mainImg);
    mainPhotoContainerDiv.appendChild(mainPhotoDiv);
    gallery.appendChild(mainPhotoDiv);

    photos.forEach((photo) => {
      const imgDiv = document.createElement('div');
      imgDiv.classList.add('col-3', 'mt-1');
      const img = new Image();
      img.classList.add('w-100');
      if (window.location.pathname.includes('cloudinary')) {
        img.src = `https://res.cloudinary.com/tamas-demo/image/upload/w_176,f_auto,q_auto/lcp/${photo.src}`;
      } else {
        img.src = `img/${photo.src}`;
      }
      imgDiv.appendChild(img);
      gallery.appendChild(imgDiv);
    });
  }
})();
