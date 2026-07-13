export const title = 'Team';
export const message = 'You selected Team.';

export function init(container) {
  container.innerHTML = `
    <section class="section-block">
      <h2>Team</h2>
      <p>This route is rendered from the team module.</p>
      <div class="card-grid">
        <div class="route-card">
          <h3>Design</h3>
          <p>Focused on usability and clarity.</p>
        </div>
        <div class="route-card">
          <h3>Development</h3>
          <p>Building the experience behind the scenes.</p>
        </div>
      </div>
    </section>
  `;
}
