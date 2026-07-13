export const title = 'Overview';
export const message = 'You selected Overview.';

export function init(container) {
  container.innerHTML = `
    <section class="section-block">
      <h2>Overview</h2>
      <p>This content is loaded from its own route module.</p>
      <div class="card-grid">
        <div class="route-card">
          <h3>Stats</h3>
          <p>Quick summary of the current view.</p>
        </div>
        <div class="route-card">
          <h3>Next Steps</h3>
          <p>Use the back button to return home.</p>
        </div>
      </div>
    </section>
  `;
}
