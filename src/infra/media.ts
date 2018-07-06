export function onWindowResize(callback: () => void): void {
  window.addEventListener("resize", callback);
}
