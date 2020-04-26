import {
  displaySeparateEpisode,
  separateEpisodeNumber,
  combineEpisodeNumber,
  scrollTo,
} from '../utils';

describe('Display separate season number and episode number function:', () => {
  test('should return display number correctly with expected input', () => {
    expect(displaySeparateEpisode('S01E01')).toBe('S01 E01');
    expect(displaySeparateEpisode('S12E23')).toBe('S12 E23');
  });

  test('should return display number correctly with different length season and episode', () => {
    expect(displaySeparateEpisode('S12332323E222')).toBe('S12332323 E222');
    expect(displaySeparateEpisode('S05E123123123')).toBe('S05 E123123123');
  });

  test('should return display number correctly with multiple season and episode numbers', () => {
    expect(displaySeparateEpisode('S12E23S01E03')).toBe('S12 E23');
    expect(displaySeparateEpisode('S12E23S01E03E05S02')).toBe('S12 E23');
  });

  test('should return No such episode with no letters S and E in episode number input', () => {
    expect(displaySeparateEpisode('0203')).toBe('No such episode');
    expect(displaySeparateEpisode('1223')).toBe('No such episode');
  });
});

describe('Separate episode number function:', () => {
  test('should return an array with season and episode number with expected input', () => {
    expect(separateEpisodeNumber('S01E01')).toStrictEqual([1, 1]);
    expect(separateEpisodeNumber('S04E29')).toStrictEqual([4, 29]);
  });

  test('should return an array with season and episode number with different length season and episode', () => {
    expect(separateEpisodeNumber('S1232323E222')).toStrictEqual([1232323, 222]);
    expect(separateEpisodeNumber('S05E12312312')).toStrictEqual([5, 12312312]);
  });

  test('should return an array with season and episode number with multiple season and episode numbers', () => {
    expect(separateEpisodeNumber('S12E23S01E03')).toStrictEqual([12, 23]);
    expect(separateEpisodeNumber('S12E05S01E03E05S02')).toStrictEqual([12, 5]);
  });

  test('should return an array with empty strings with no letters S and E in episode number input', () => {
    expect(separateEpisodeNumber('0203')).toStrictEqual(['', '']);
    expect(separateEpisodeNumber('1223')).toStrictEqual(['', '']);
  });
});

describe('Combine episode number function:', () => {
  test('should return episode code with expected inputs', () => {
    expect(combineEpisodeNumber('1', '1')).toBe('S01E01');
    expect(combineEpisodeNumber('12', '23')).toBe('S12E23');
  });

  test('should return episode code with different length inputs', () => {
    expect(combineEpisodeNumber('12332323', '222')).toBe('S12332323E222');
    expect(combineEpisodeNumber('5', '123123123')).toBe('S05E123123123');
  });

  test('should return episode code only with season or episode if any of them are missing', () => {
    expect(combineEpisodeNumber('12332323', '')).toBe('S12332323');
    expect(combineEpisodeNumber('', '123123123')).toBe('E123123123');
  });

  test('should return an empty string with any letters in inputs', () => {
    expect(combineEpisodeNumber('s', 'weq')).toBe('');
    expect(combineEpisodeNumber('s231', '21')).toBe('');
  });
});

describe('ScrollTo function:', () => {
  const { scrollTo: originScrollTo } = window;

  beforeEach(() => {
    window.scrollTo = jest.fn();
    scrollTo(0, 0, 'smooth');
  });

  afterAll(() => {
    window.scrollTo = originScrollTo;
  });

  test('should call window scrollTo with correct parametrs', () => {
    expect(window.scrollTo).toBeCalledWith({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    expect(window.scrollTo).not.toBeCalledWith({
      top: 1,
      left: 1,
      behavior: 'auto',
    });
  });

  test('should call window scrollTo only one time', () => {
    expect(window.scrollTo).toBeCalledTimes(1);
  });
});
