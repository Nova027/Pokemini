export const title = 'Projects';
export const message = 'You selected Projects.';

export function init(container) {
  container.innerHTML = `
    <section class="section-block">
      <h2>Projects</h2>
      <p>Project details are now loaded from a dedicated route file.</p>
      <div class="card-grid">
        <div class="route-card">
          <h3>Battle Engeeno</h3>
          <p>Core turn logic and battle flow.</p>
        </div>
        <div class="route-card">
          <h3>UI Shell</h3>
          <p>Reusable navigation and page templates.</p>
        </div>
      </div>
    </section>
  `;
}
