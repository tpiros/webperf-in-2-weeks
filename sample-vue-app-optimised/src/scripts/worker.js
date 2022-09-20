onmessage = (e) => {
  console.log('Worker working');
  const fibonacci = (num) => {
    if (num <= 1) return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
  };
  postMessage(fibonacci(e.data));
};
