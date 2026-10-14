const RELEASES_API = 'https://api.github.com/repos/mindyannakawee2-tech/TheOreReleases/releases';
const RELEASES_URL = 'https://github.com/mindyannakawee2-tech/TheOreReleases/releases';
document.getElementById('year').textContent = new Date().getFullYear();
(async () => {
  const title = document.getElementById('release-title');
  const desc = document.getElementById('release-description');
  const date = document.getElementById('release-date');
  const link = document.getElementById('release-link');
  try {
    const response = await fetch(RELEASES_API, { headers: { 'Accept':'application/vnd.github+json' } });
    if (!response.ok) throw new Error('GitHub API unavailable');
    const releases = await response.json();
    const latest = releases.find(release => !release.draft);
    if (!latest) { title.textContent = 'PREVIEW RELEASES COMING SOON'; desc.textContent = 'Follow the official GitHub Releases page for new builds.'; return; }
    title.textContent = latest.name || latest.tag_name;
    const body = (latest.body || '').replace(/[#>*`|]/g, '').trim();
    desc.textContent = body ? body.slice(0, 370) + (body.length > 370 ? '…' : '') : 'A new development release is available.';
    if (latest.published_at) date.textContent = 'PUBLISHED ' + new Date(latest.published_at).toLocaleDateString(undefined, {year:'numeric',month:'long',day:'numeric'}).toUpperCase();
    // Keep all release links inside our official repository.
    if (typeof latest.html_url === 'string' && latest.html_url.startsWith(RELEASES_URL + '/tag/')) link.href = latest.html_url;
  } catch(error) { title.textContent = 'CHECK THE LATEST RELEASES'; desc.textContent = 'See the official GitHub Releases page for current versions and news.'; }
})();
