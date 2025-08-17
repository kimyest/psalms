// 모바일 메뉴
const toggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('menu');
if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    menu.classList.toggle('open');
  });
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    menu.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
}

// 테마(다크/라이트)
const root = document.documentElement;
const modeBtn = document.querySelector('.mode-toggle');
const saved = localStorage.getItem('theme');
const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
root.dataset.theme = saved || (prefersDark ? 'dark' : 'light');
if (modeBtn) {
  modeBtn.addEventListener('click', () => {
    const current = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = current;
    localStorage.setItem('theme', current);
    modeBtn.setAttribute('aria-pressed', String(current === 'dark'));
  });
}

// 연도 자동 표기
document.getElementById('year').textContent = new Date().getFullYear();

// 포트폴리오 필터링
const buttons = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.work-card');
buttons.forEach(btn => btn.addEventListener('click', () => {
  buttons.forEach(b => b.classList.remove('active')); btn.classList.add('active');
  const f = btn.dataset.filter;
  cards.forEach(c => {
    const show = f === 'all' || c.classList.contains(f);
    c.style.display = show ? '' : 'none';
  });
}));
