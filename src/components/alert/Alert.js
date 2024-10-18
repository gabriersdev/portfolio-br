export function createAlert(type, text) {
  const [div, strong] = [document.createElement('div'), document.createElement('strong')];
  div.classList.value = `alert alert-${type}`;
  div.setAttribute('role', 'alert')
  strong.classList.value = 'text';
  strong.textContent = text
  div.appendChild(strong)
  return div;
}
