// Mobile navigation toggle
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}

// Item counts next to collapsible headings: <span class="count" data-count></span>
document.querySelectorAll('details.pub-group').forEach((group) => {
  const badge = group.querySelector('summary .count');
  if (badge) badge.textContent = group.querySelectorAll('ol.pub-list > li').length;
});

// Research page: All / Methodology / Biomedical toggle with sliding indicator
const viewToggle = document.querySelector('.view-toggle');
if (viewToggle) {
  const buttons = Array.from(viewToggle.querySelectorAll('button'));
  const slider = viewToggle.querySelector('.view-toggle__slider');
  const areas = document.querySelectorAll('.pub-area');

  const select = (index) => {
    const filter = buttons[index].dataset.filter;
    buttons.forEach((b, i) => {
      b.classList.toggle('active', i === index);
      b.setAttribute('aria-pressed', String(i === index));
    });
    if (slider) slider.style.transform = `translateX(${index * 100}%)`;
    areas.forEach((area) => {
      area.hidden = !(filter === 'all' || area.dataset.area === filter);
    });
  };

  buttons.forEach((b, i) => b.addEventListener('click', () => select(i)));
  select(0);
}

document.querySelectorAll('.news-list[data-limit]').forEach((list) => {
  const limit = parseInt(list.dataset.limit, 10);
  const items = Array.from(list.children).filter((el) => el.classList.contains('news-item'));
  if (!limit || items.length <= limit) return;
  const extra = items.slice(limit);
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'news-more';
  const setOpen = (open) => {
    extra.forEach((el) => el.classList.toggle('is-hidden', !open));
    btn.setAttribute('aria-expanded', String(open));
    btn.textContent = open ? 'Show less' : `Show all news (${items.length})`;
  };
  btn.addEventListener('click', () => setOpen(btn.getAttribute('aria-expanded') !== 'true'));
  list.after(btn);
  setOpen(false);
});
