function fakeAjax(url, cb) {
  const fake_responses = {
    file1: 'The first text',
    file2: 'The middle text',
    file3: 'The last text',
  };

  const randomDelay = Math.round(math.random() * 1e4) % 8000 + 100;

  console.log('Requesting: ', url);

  setTimeout(() => {
    cb(fake_responses[url]);
  }, randomDelay);
}

function output(text) {
  console.log(text);
}

function getFile(file) {
  fakeAjax(file, () => {
    // what do we do here?
  });
}
