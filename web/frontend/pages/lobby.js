export const title = 'Lobby';
export const message = 'You selected Lobby.';

export async function init(container) {
  container.innerHTML = `
    <section class="section-block">
      <h2>Lobby</h2>
      <div class="card-grid">
        <div class="route-card">
          <h3>Battle Engine</h3>
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
