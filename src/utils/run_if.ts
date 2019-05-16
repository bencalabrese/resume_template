export default function runIf(
  condition: () => boolean,
  callback: (...args: any[]) => void
): (...args: any[]) => void {
  return (...args: any[]) => {
    if (condition()) callback(...args);
  };
}
