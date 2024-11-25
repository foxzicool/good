import { describe, expect, it } from 'vitest';
import formatTime from './formatTime';

describe('formatTime function with dynamic times', () => {
  it('formats midnight correctly (12:00 AM)', () => {
    const date = new Date(2023, 0, 1, 0, 0); // Tests formatting at the start of the day.
    expect(formatTime(date)).toBe('12:00AM');
  });

  it('formats noon correctly (12:00 PM)', () => {
    const date = new Date(2023, 0, 1, 12, 0); // Tests formatting at midday.
    expect(formatTime(date)).toBe('12:00PM');
  });

  it('formats a morning time without leading zero in hour (9:05 AM)', () => {
    const date = new Date(2023, 0, 1, 9, 5); // Tests morning time without a leading zero.
    expect(formatTime(date)).toBe('9:05AM');
  });

  it('formats an evening time (8:30 PM)', () => {
    const date = new Date(2023, 0, 1, 20, 30); // Tests formatting in the evening.
    expect(formatTime(date)).toBe('8:30PM');
  });

  it('removes unnecessary space before AM/PM', () => {
    const date = new Date(2023, 0, 1, 11, 59); // Checks for correct spacing near AM/PM transition.
    expect(formatTime(date)).toBe('11:59AM');
  });
});
