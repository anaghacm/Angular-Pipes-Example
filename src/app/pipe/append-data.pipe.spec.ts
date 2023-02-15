import { AppendDataPipe } from './append-data.pipe';

describe('AppendDataPipe', () => {
  it('create an instance', () => {
    const pipe = new AppendDataPipe();
    expect(pipe).toBeTruthy();
  });
});
