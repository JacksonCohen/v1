export function scrollTo(elementId: string) {
  var element = document.getElementById(elementId);
  element?.scrollIntoView({
    block: 'start',
    behavior: 'smooth',
  });
}
