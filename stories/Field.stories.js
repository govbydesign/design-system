const renderField = () => {
  const wrapper = document.createElement('div');
  wrapper.className = 'field';
  wrapper.innerHTML = `
    <label class="field__label" for="email">Email address</label>
    <input class="field__input" id="email" type="email" value="mario@example.com" />
    <p class="field__hint">Semantic field styling inherits the active mode and brand automatically.</p>
  `;
  return wrapper;
};

export default {
  title: 'Components/Field',
  tags: ['autodocs'],
  render: renderField,
};

export const Default = {};
