export function estimateReadingTimeMinutes(text: string): number {
  const words = (text.match(/\b[\p{L}\p{N}']+\b/gu) ?? []).length;
  return Math.max(1, Math.round(words / 200));
}

