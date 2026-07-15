export const title = 'Lobby';
export const message = 'You selected Lobby.';

export function init(container) {
  container.innerHTML = `
    <section class="section-block">
      <h2>Lobby</h2>
      <p>Battle details are now loaded from a dedicated route file.</p>
      <div class="card-grid">
        <div class="route-card">
          <h3>Battle Engeeno</h3>
          <p>Core turn logic and battle flow.</p>
        </div>
        <div class="route-card">
          <h3>Team</h3>
          <p>Reusable navigation and page templates.</p>
        </div>
      </div>
    </section>
  `;
}
