const docTitle = document.title;
const homeView = document.getElementById('view-home');
const dynamicView = document.getElementById('view-dynamic');
const contentArea = document.getElementById('dynamic-content');

const routes = {
  '/team': './pages/team.js',
  '/train': './pages/train.js',
  '/fetch': './pages/fetch.js',
  '/battles': './pages/battles.js',
  '/lobby': './pages/lobby.js',
  '/settings': './pages/unknown.js'
};

async function router() {
  const path = window.location.hash.slice(1) || '/';

  // If URL path is the home path,
  if (path === '/') {
    homeView.style.display = 'grid';
    dynamicView.style.display = 'none';
    contentArea.innerHTML = '';
    return;
  }
  const routePath = routes[path];

  // If the URL path does not match any of the available routes.
  if (!routePath) {
    window.location.hash = '/';
    return;
  }

  // Initial loading screen for any of the valid routes.
  homeView.style.display = 'none';
  dynamicView.style.display = 'grid';
  contentArea.innerHTML = '<p class="loading-text">Loading page...</p>';

  try {
    // Dynamic loading of relevant page module data corresponding to route path.
    const pageModule = await import(routePath);
    pageModule.init(contentArea);
    document.title = `${pageModule.title || 'Page'} | ${docTitle}`;
  }
  catch (error) {
    contentArea.innerHTML = '<p class="error-text">Error loading the page. Try again.</p>';
    console.error(error);
  }
}

document.addEventListener('click', (event) => {
  const trigger = event.target.closest('[data-route]');
  if (!trigger)
    return;

  const targetPath = trigger.getAttribute('data-route');
  window.location.hash = targetPath === '/' ? '' : targetPath;
});

window.addEventListener('hashchange', router);
window.addEventListener('load', router);
