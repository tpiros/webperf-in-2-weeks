import './style.css';

const disable = (element) => (element.disabled = true);
const enable = (element) => (element.disabled = false);

const checkboxes = document.querySelectorAll('input[type=checkbox]');

const renderButton = document.getElementById('render');
renderButton.disabled = true;

const clear = () => {
  document.querySelectorAll('img').forEach((el) => el.remove());
  document.querySelectorAll('[id^=format]').forEach((el) => {
    el.textContent.includes('✅') ? (el.textContent = '') : null;
  });
  const checkedBoxes = document.querySelectorAll(
    'input[type=checkbox]:checked'
  );
  checkedBoxes.forEach((checkedBox, index) => {
    document.getElementById(`format-${index}`).textContent = checkedBox.value;
  });
};

const manageCheckBoxSelectAction = (e) => {
  const checkedBoxes = document.querySelectorAll(
    'input[type=checkbox]:checked'
  );
  const checkedBoxesLength = document.querySelectorAll(
    'input[type=checkbox]:checked'
  ).length;

  if (checkedBoxesLength === 3) {
    renderButton.disabled = false;
  } else {
    renderButton.disabled = true;
  }
  const uncheckedBoxes = document.querySelectorAll(
    'input[type=checkbox]:not(:checked)'
  );

  if (checkedBoxesLength === 3) {
    uncheckedBoxes.forEach((checkbox) => disable(checkbox));
    checkedBoxes.forEach((checkedBox, index) => {
      document.getElementById(`format-${index}`).textContent = checkedBox.value;
    });
  } else {
    checkboxes.forEach((checkbox) => enable(checkbox));
  }
};

checkboxes.forEach((checkbox) =>
  checkbox.addEventListener('change', manageCheckBoxSelectAction)
);

renderButton.addEventListener('click', async () => {
  clear();
  const getImageHeight = (src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img.onload = function () {
        localStorage.setItem(src, this.height);
        resolve(this.height);
      };
      img.onerror = reject;
    });
  };

  const publicId = 'insta/htudoidq8lyvypq9fmoo';
  const width = 1200;
  const splitWidth = width / 3;
  let height = 0;
  if (
    !localStorage.getItem(
      `https://res.cloudinary.com/tamas-demo/image/upload/w_${width}/${publicId}`
    )
  ) {
    console.log('not cached');
    height = await getImageHeight(
      `https://res.cloudinary.com/tamas-demo/image/upload/w_${width}/${publicId}`
    );
  }
  console.log('cached');
  height = localStorage.getItem(
    `https://res.cloudinary.com/tamas-demo/image/upload/w_${width}/${publicId}`
  );
  let position = 0;
  const ranking = new Map();
  ranking.set(1, '🥇');
  ranking.set(2, '🥈');
  ranking.set(3, '🥉');
  const loadImage = (src, location, done) => {
    const img = new Image();
    img.src = src;
    img.onload = function () {
      position++;
      done(location, position);
    };
    document.getElementById(location).appendChild(img);
  };

  const checkedBoxes = document.querySelectorAll(
    'input[type=checkbox]:checked'
  );

  checkedBoxes.forEach((checkedBox, index) => {
    let format = checkedBox.value.toLowerCase();
    console.log(format);
    if (format === 'progressive jpg (semi)') {
      format = 'jpg,fl_progressive:semi';
    }
    if (format === 'progressive jpg (steep)') {
      format = 'jpg,fl_progressive:steep';
    }
    if (format === 'jpg') {
      format = 'jpg,fl_progressive:none';
    }
    if (index === 0) {
      loadImage(
        `https://res.cloudinary.com/tamas-demo/image/upload/w_${width}/c_crop,w_${splitWidth},h_${height},y_0,g_west/f_${format}/${publicId}`,
        index,
        (location, position) => {
          document.getElementById(
            `format-${location}`
          ).textContent += `${ranking.get(position)} ✅`;
        }
      );
    }
    if (index === 1) {
      loadImage(
        `https://res.cloudinary.com/tamas-demo/image/upload/w_${width}/c_crop,w_${splitWidth},h_${height},x_${splitWidth},g_west/f_${format}/${publicId}`,
        index,
        (location, position) => {
          document.getElementById(
            `format-${location}`
          ).textContent += `${ranking.get(position)} ✅`;
        }
      );
    }

    if (index === 2) {
      loadImage(
        `https://res.cloudinary.com/tamas-demo/image/upload/w_${width}/c_crop,w_${splitWidth},h_${height},x_${
          splitWidth * 2
        },g_west/f_${format}/${publicId}`,
        index,
        (location, position) => {
          document.getElementById(
            `format-${location}`
          ).textContent += `${ranking.get(position)} ✅`;
        }
      );
    }
  });
});
