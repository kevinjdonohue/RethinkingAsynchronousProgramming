import { getFile, responses } from './exercise-1';

describe('Exercise 1 Tests', () => {
  it('should request all (3) files at once in parallel', () => {
    // act
    getFile('file3');
    getFile('file1');
    getFile('file2');

    // assert
    console.log('responses: ', responses);
  });
});
