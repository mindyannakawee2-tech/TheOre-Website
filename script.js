const menuButton = document.getElementById('menu-button');
const nav = document.getElementById('navigation');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));
document.getElementById('year').textContent = new Date().getFullYear();
async function loadLatestRelease() {
  const title = document.getElementById('news-title');
  const desc = document.getElementById('news-description');
  const date = document.getElementById('news-date');
  const link = document.getElementById('news-link');
  try {
    const response = await fetch('https://api.github.com/repos/mindyannakawee2-tech/TheOreReleases/releases', { headers: { Accept: 'application/vnd.github+json' } });
    if (!response.ok) throw new Error('GitHub unavailable');
    const releases = await response.json();
    const latest = releases.find(release => !release.draft);
    if (!latest) { title.textContent = 'First preview coming soon'; desc.textContent = 'There are no published game releases yet. Check GitHub for future updates.'; return; }
    title.textContent = latest.name || latest.tag_name;
    date.textContent = latest.published_at ? new Date(latest.published_at).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' }) : '';
    desc.textContent = (latest.body || 'Read the release notes on GitHub.').slice(0, 420);
    link.href = latest.html_url;
    link.textContent = 'View release →';
  } catch (_) {
    title.textContent = 'Follow TheORE development';
    desc.textContent = 'Visit GitHub for the latest game preview and updates.';
  }
}
loadLatestRelease();
