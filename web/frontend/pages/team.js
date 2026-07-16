export const title = 'Team';
export const message = 'You selected Team.';

export function init(container) {
  container.innerHTML = `
    <section class="section-block">
      <h2>Team</h2>
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
