import {expect} from 'chai';
import getMessage from './message';

describe('dummyTest', () => {
  it('should run the test', () => {
    expect(getMessage()).to.equal('Hello World');
  })
});