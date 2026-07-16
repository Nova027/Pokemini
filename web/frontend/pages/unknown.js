export const title = 'Settings';
export const message = 'You selected Settings.';

export function init(container) {
  container.innerHTML = `
    <section class="section-block">
      <h2>Settings</h2>
      <div class="card-grid">
        <div class="route-card">
          <h3>Preferences</h3>
          <p>Customize your experience.</p>
        </div>
        <div class="route-card">
          <h3>Security</h3>
          <p>Control how your data is handled.</p>
        </div>
      </div>
    </section>
  `;
}
