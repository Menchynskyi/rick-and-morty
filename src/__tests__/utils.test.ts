import {
  displaySeparateEpisode,
  separateEpisodeNumber,
  combineEpisodeNumber,
} from '../utils';

describe('Separate season number and episode number', () => {
  test('Episode number input is such as expected', () => {
    expect(displaySeparateEpisode('S01E01')).toBe('S01 E01');
    expect(displaySeparateEpisode('S12E23')).toBe('S12 E23');
  });
  test('Episode and season number with different length', () => {
    expect(displaySeparateEpisode('S12332323E222')).toBe('S12332323 E222');
    expect(displaySeparateEpisode('S05E123123123')).toBe('S05 E123123123');
  });
  test('Multiple season and episode numbers', () => {
    expect(displaySeparateEpisode('S12E23S01E03')).toBe('S12 E23');
    expect(displaySeparateEpisode('S12E23S01E03E05S02')).toBe('S12 E23');
  });
  test('No letters S and E in episode number input', () => {
    expect(displaySeparateEpisode('0203')).toBe('No such episode');
    expect(displaySeparateEpisode('1223')).toBe('No such episode');
  });
});

describe('Return array with season number first and episode number second', () => {
  test('Episode number input is such as expected', () => {
    expect(separateEpisodeNumber('S01E01')).toStrictEqual([1, 1]);
    expect(separateEpisodeNumber('S04E29')).toStrictEqual([4, 29]);
  });
  test('Episode and season number with different length', () => {
    expect(separateEpisodeNumber('S1232323E222')).toStrictEqual([1232323, 222]);
    expect(separateEpisodeNumber('S05E12312312')).toStrictEqual([5, 12312312]);
  });
  test('Multiple season and episode numbers', () => {
    expect(separateEpisodeNumber('S12E23S01E03')).toStrictEqual([12, 23]);
    expect(separateEpisodeNumber('S12E05S01E03E05S02')).toStrictEqual([12, 5]);
  });
  test('No letters S and E in episode number input', () => {
    expect(separateEpisodeNumber('0203')).toStrictEqual(['', '']);
    expect(separateEpisodeNumber('1223')).toStrictEqual(['', '']);
  });
});

describe('Combine season number and episode number in one string', () => {
  test('Episode number input is such as expected', () => {
    expect(combineEpisodeNumber('1', '1')).toBe('S01E01');
    expect(combineEpisodeNumber('12', '23')).toBe('S12E23');
  });
  test('Episode and season number with different length', () => {
    expect(combineEpisodeNumber('12332323', '222')).toBe('S12332323E222');
    expect(combineEpisodeNumber('5', '123123123')).toBe('S05E123123123');
  });
  test('Episode and season number with different length', () => {
    expect(combineEpisodeNumber('12332323', '')).toBe('S12332323');
    expect(combineEpisodeNumber('', '123123123')).toBe('E123123123');
  });
  test('Any letters in input', () => {
    expect(combineEpisodeNumber('s', 'weq')).toBe('');
    expect(combineEpisodeNumber('s231', 'e21')).toBe('');
  });
});
