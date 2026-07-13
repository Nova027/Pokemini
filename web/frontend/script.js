const status = document.getElementById('status');
const homeView = document.getElementById('view-home');
const dynamicView = document.getElementById('view-dynamic');
const contentArea = document.getElementById('dynamic-content');

const routes = {
  '/overview': './pages/overview.js',
  '/projects': './pages/projects.js',
  '/contact': './pages/contact.js',
  '/team': './pages/team.js',
  '/battle': './pages/battle.js',
  '/help': './pages/help.js',
  '/download': './pages/download.js',
  '/settings': './pages/settings.js',
  '/lobby': './pages/lobby.js'
};

async function router() {
  const path = window.location.hash.slice(1) || '/';

  if (path === '/') {
    homeView.style.display = 'grid';
    dynamicView.style.display = 'none';
    contentArea.innerHTML = '';
    status.textContent = 'Select a button to see a message.';
    return;
  }

  const routePath = routes[path];
  if (!routePath) {
    window.location.hash = '/';
    return;
  }

  homeView.style.display = 'none';
  dynamicView.style.display = 'block';
  contentArea.innerHTML = '<p class="loading-text">Loading page...</p>';

  try {
    const pageModule = await import(routePath);
    pageModule.init(contentArea);
    status.textContent = pageModule.message || 'Route loaded.';
    document.title = `${pageModule.title || 'Page'} | Simple Webpage Template`;
  } catch (error) {
    contentArea.innerHTML = '<p class="error-text">Error loading the page. Try again.</p>';
    status.textContent = 'There was a problem loading this route.';
    console.error(error);
  }
}

document.addEventListener('click', (event) => {
  const trigger = event.target.closest('[data-route]');
  if (!trigger) return;

  const targetPath = trigger.getAttribute('data-route');
  window.location.hash = targetPath === '/' ? '' : targetPath;
});

window.addEventListener('hashchange', router);
window.addEventListener('load', router);
