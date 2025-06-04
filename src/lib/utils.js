export function calculateReadingTimeInSeconds(text) {
  const WORDS_PER_SECOND = 200 / 60;
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.ceil(wordCount / WORDS_PER_SECOND);
}
