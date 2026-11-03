/**
 * Formats a number to Romanian currency representation:
 * E.g. 4299 -> "4.299 RON"
 * E.g. 186500 -> "186.500 RON"
 */
export function formatRON(amount: number): string {
  if (isNaN(amount)) return '0 RON';
  const rounded = Math.round(amount);
  // Romanian format uses dot as thousands separator
  const formatted = rounded.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return `${formatted} RON`;
}

export function formatNumberRO(num: number): string {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '…';
}
