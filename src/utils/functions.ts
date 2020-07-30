export function fade(type: string, ms: number, el: HTMLElement): void {
  console.log("Fade out", type, ms, el);

  const isIn = type === "in",
    interval = 50,
    duration = ms,
    gap = interval / duration;
  let opacity = isIn ? 0 : 1;

  if (isIn) {
    el.setAttribute("style", `display: inline`);
    el.setAttribute("style", `opacity: ${opacity}`);
  }

  function func() {
    opacity = isIn ? opacity + gap : opacity - gap;
    el.setAttribute("style", `opacity: ${opacity}`);

    if (opacity <= 0) el.setAttribute("style", `display: none`);
    if (opacity <= 0 || opacity >= 1) window.clearInterval(fading);
  }

  const fading = window.setInterval(func, interval);
}
