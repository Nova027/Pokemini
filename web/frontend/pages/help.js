export const title = 'Help';
export const message = 'You selected Help.';

export function init(container) {
  container.innerHTML = `
    <section class="section-block">
      <h2>Help</h2>
      <p>This help view comes from its own route module.</p>
      <div class="card-grid">
        <div class="route-card">
          <h3>FAQ</h3>
          <p>Common questions and quick answers.</p>
        </div>
        <div class="route-card">
          <h3>Support</h3>
          <p>Additional guidance is available here.</p>
        </div>
      </div>
    </section>
  `;
}
