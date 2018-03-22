/* eslint-disable import/prefer-default-export, no-console */

const fileNames = ['file1', 'file2', 'file3'];

const randomDelay = Math.round(Math.random() * 1e4) % 8000 + 100;

const responses = new Map();

const fakeResponses = {
  file1: 'The first text',
  file2: 'The middle text',
  file3: 'The last text',
};

function handleResponse(file, text) {
  // do you need to check for existence in the map first?
  if (!responses.has(file)) {
    console.log('file: ', file);
    responses.set(file, text);
  }

  // console.log(responses);

  fileNames.forEach((currentValue, index) => {
    if (responses.has(fileNames[index])) {
      if (responses.get(fileNames[index]) === true) {
        console.log('text: ', responses.get(fileNames[index]));
        // responses[fileNames[index]] = false;
        responses.set(fileNames[index], false);
        // responses.delete(fileNames[index]);
      }
    } else {
      console.log('here');
    }
  });

  console.log('Complete!');
}

function fakeAjax(url, cb) {
  console.log('Requesting: ', url);

  setTimeout(() => {
    cb(fakeResponses[url]);
  }, randomDelay);
}

function getFile(file) {
  fakeAjax(file, (text) => {
    handleResponse(file, text);
  });
}

export { getFile, responses };
