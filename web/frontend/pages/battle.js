export const title = 'Battle';
export const message = 'You selected Battle.';

export function init(container) {
  // container.innerHTML = `
  //   <section class="section-block">
  //     <h2>Battle</h2>
  //     <p>Latest updates are injected from the battle route file.</p>
  //     <div class="card-grid">
  //       <div class="route-card">
  //         <h3>New Battle Room</h3>
  //         <p>New content is now loaded on demand.</p>
  //       </div>
  //       <div class="route-card">
  //         <h3>Join Battle Room</h3>
  //         <p>Route modules keep the app organized.</p>
  //       </div>
  //     </div>
  //   </section>
  // `;
  container.innerHTML = `
    <section class="section-block">
      <h2>Battle</h2>
      <p>Latest updates are injected from the battle route file.</p>
      <div class="button-group">
        <div class="route-card">
          <h3><button data-route="/lobby">New Battle Room</button></h3>
          <p>New content is now loaded on demand.</p>
        </div>
        <div class="route-card">
          <h3><button>Join Battle Roomi</button></h3>
          <p>Route modules keep the app organized.</p>
        </div>
      </div>
    </section>
  `;
}
