export const FakeServerRequest = formData =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      let p = Math.random() * 100;
      if (p < 80) {
        resolve(formData);
      } else {
        reject('An error occurred please save again');
      }
    }, 1000);
  });
