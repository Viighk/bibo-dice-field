const tabs = [...document.querySelectorAll('.case-tab')];
const panels = [...document.querySelectorAll('.case-panel')];

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const step = tab.dataset.step;
    tabs.forEach((item) => {
      const active = item === tab;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-selected', active ? 'true' : 'false');
    });
    panels.forEach((panel) => panel.classList.toggle('is-active', panel.dataset.panel === step));
  });
});
