export const title = 'Download';
export const message = 'You selected Download.';

export function init(container) {
  container.innerHTML = `
    <section class="section-block">
      <h2>Download</h2>
      <p>This download page is loaded from a separate module.</p>
      <div class="card-grid">
        <div class="route-card">
          <h3>Package</h3>
          <p>Download the latest build here.</p>
        </div>
        <div class="route-card">
          <h3>Changelog</h3>
          <p>Review updates and improvements.</p>
        </div>
      </div>
    </section>
  `;
}
