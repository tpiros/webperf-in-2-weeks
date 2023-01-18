import './style.css';
import fibonacci from './fibonacci';

function savePost() {
  validateInputData();
  showLoading();
  saveToDatabase();
  updateUI();
}

function validateInputData() {
  fibonacci(39);
  console.log('validating input data');
}

function showLoading() {
  fibonacci(37);
  console.log('show loading indicator');
}

function saveToDatabase() {
  fibonacci(41);
  console.log('saving to database');
}

function updateUI() {
  fibonacci(39);
  console.log('updating the UI with a response');
}

savePost();

// function yieldToMain() {
//   return new Promise((resolve) => {
//     setTimeout(resolve, 0);
//   });
// }

// async function savePost() {
//   const tasks = [validateInputData, showLoading, saveToDatabase, updateUI];

//   let deadline = performance.now() + 50;

//   while (tasks.length > 0) {
//     if (
//       navigator.scheduling?.isInputPending() ||
//       performance.now() >= deadline
//     ) {
//       await yieldToMain();
//       deadline = performance.now() + 50;
//       continue;
//       // } else {
//       //   const task = tasks.shift();
//       //   task();
//       // }
//     }
//     const task = tasks.shift();
//     task();
//   }
// }

// savePost();

const btn = document.getElementById('go');
btn.addEventListener('click', () => {
  fibonacci(30);
  console.log('%cclicked', 'color: red');
});
