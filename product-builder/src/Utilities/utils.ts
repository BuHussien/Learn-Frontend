/**
 * Slices a string to a specified length and adds "..." if truncated.
 *
 * @param txt - The string to slice.
 * @param len - Maximum length. Defaults to 75.
 * @returns The sliced string.
 */
export function txtSlicer(txt: string, len: number = 75) {
  if (txt.length <= len) return txt;
  else return txt.slice(0, len) + "...";
}
export function generateId(): string {
  return typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}
