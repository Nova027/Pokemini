export const title = 'Team';
export const message = 'You selected Team.';

const pokemonList = [
  "Garchomp", "Charizard", "Maushold", "Incineroar", "Sneasler", "Gholdengo", "Whimsicott", "Kingambit",
  "Staraptor", "Metagross", "Farigiraf", "Ceruledge"
]

export async function init(container) {
  // container.innerHTML = `
  //   <section class="section-block">
  //     <h2>Team</h2>
  //     <div class="card-grid">
  //       <div class="route-card">
  //         <h3>Stats</h3>
  //         <p>Quick summary of the current view.</p>
  //       </div>
  //       <div class="route-card">
  //         <h3>Next Steps</h3>
  //         <p>Use the back button to return home.</p>
  //       </div>
  //     </div>
  //   </section>
  //   <div class="dashboard-layout">
  //     <div class="route-card">
  //       <h3>Stats</h3>
  //       <p>Quick summary of the current view.</p>
  //     </div>
  //     <div id="available-pokemon" class="grid-container">
  //     </div>
  //   </div>
  // `;
  
  // const pokemonListDom = document.getElementById('available-pokemon');
  // let listContent = '';
  // for (const pokemon of pokemonList) {
  //   listContent += `
  //     <div class="grid-item">
  //       <img src="path/to/${pokemon}.png" alt="${pokemon}Img" class="item-image">
  //       <p class="item-text">${pokemon}</p>
  //     </div>
  //   `;
  // }
  // pokemonListDom.innerHTML = listContent;

  try {
    // 2. Fetch the user-specific data from FastAPI
    // The browser automatically attaches the cookie here!
    const response = await fetch('/pokemonList/api/my-team', {
      credentials: 'same-origin'
    });

    if (!response.ok) throw new Error('Failed to fetch data');
    const data = await response.json();

    // 3. Render the dynamic server data into the view
    container.innerHTML = `
      <div class="team-page">
        <h2>Welcome back, ${data.trainer_name}!</h2>
        <p>Your team ID is: <code>${data.guest_id}</code></p>
        
        <h3>Your Roster</h3>
        <ul>
          ${data.roster.map(member => `<li>${member}</li>`).join('')}
        </ul>
      </div>
    `;
  }
  catch (error) {
    console.error("Failed to load page data:", error);
    container.innerHTML = '<p class="error-text">Could not load your team data.</p>';
  }
}
