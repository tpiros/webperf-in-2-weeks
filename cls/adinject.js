setTimeout(() => {
  const div = document.getElementById('ad');
  const video = document.createElement('video');
  video.src =
    'https://res.cloudinary.com/tamas-demo/video/upload/w_800/l_text:Arial_80:BUY ME NOW/fl_layer_apply/colombia.mp4';
  video.autoplay = true;
  video.controls = false;
  video.muted = true;
  video.width = 800;
  div.appendChild(video);
}, 1000);
