export const createButton = ({
  variant = 'primary',
  size = 'medium',
  backgroundColor,
  label,
  onClick,
}) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = label;
  btn.addEventListener('click', onClick);
  btn.dataset.variant = variant;

  btn.className = ['button', `button--${size}`].join(' ');

  if (backgroundColor) {
    btn.style.setProperty('--button-bg', backgroundColor);
  }

  return btn;
};
