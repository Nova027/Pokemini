export const title = 'Fetch';
export const message = 'You selected Fetch.';

export function init(container) {
  container.innerHTML = `
    <section class="section-block">
      <h2>Fetch</h2>
      <p>Fetch content is isolated in its own module.</p>
      <div class="card-grid">
        <div class="route-card">
          <h3>Email</h3>
          <p>hello@example.com</p>
        </div>
        <div class="route-card">
          <h3>Support</h3>
          <p>Reach out for questions or feedback.</p>
        </div>
      </div>
    </section>
  `;
}
