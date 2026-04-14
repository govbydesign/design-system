const createAlert = (variant, title, message) => {
  const alert = document.createElement('aside');
  alert.className = `alert alert--${variant}`;
  alert.innerHTML = `<strong>${title}</strong><p>${message}</p>`;
  return alert;
};

export default {
  title: 'Components/Alert',
  tags: ['autodocs'],
};

export const Success = {
  render: () => createAlert('success', 'Deployment complete', 'Your release is live and all system checks passed.'),
};

export const Warning = {
  render: () => createAlert('warning', 'Review needed', 'One content change needs approval before publishing.'),
};

export const Danger = {
  render: () => createAlert('danger', 'Action blocked', 'This step is unavailable until a required field is fixed.'),
};
