export function getElementDimensions(element: HTMLElement) {
  const { height } = element?.getBoundingClientRect();
  const offsetTop = element?.offsetTop;
  const offsetBottom = offsetTop + height;

  return {
    height,
    offsetTop,
    offsetBottom,
  };
}
