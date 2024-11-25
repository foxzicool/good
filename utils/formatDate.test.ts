import { describe, expect, it } from 'vitest';
import formatDate from './formatDate';

describe('formatDate()', () => {
  it('formats January 2nd to "1/2"', () => {
    const date = new Date(2023, 0, 2); // Note that months start from 0, 0 means January
    expect(formatDate(date)).toBe('1/2');
  });

  it('formats November 12th to "11/12"', () => {
    const date = new Date(2023, 10, 12);
    expect(formatDate(date)).toBe('11/12');
  });

  it('formats the current date', () => {
    const currentDate = new Date();
    const formatted = formatDate(currentDate);
    const expected = `${currentDate.getMonth() + 1}/${currentDate.getDate()}`;
    expect(formatted).toBe(expected);
  });

  it('formats February 29th in a leap year', () => {
    const date = new Date(2024, 1, 29); // 2024 is a leap year
    expect(formatDate(date)).toBe('2/29');
  });
});
