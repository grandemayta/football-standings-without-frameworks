class FootballStandings extends HTMLElement {
    get competition() {
      return this.getAttribute('competition');
    }

    get season() {
      return this.getAttribute('season');
    }

    get key() {
      return this.getAttribute('key');
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    async getStandings(competition, season, publicKey) {
      const baseUrl = 'https://api.football-data.org/v2';
      const standingsEndpoint = `competitions/${competition}/standings?season=${season}`
      const headers = { 'X-Auth-Token': publicKey };
      const response = await fetch(`${baseUrl}/${standingsEndpoint}`, { headers });
      return response.json();
    }

    connectedCallback() {
      this.render();    
    }

    async render() {
      const standings = await this.getStandings(this.competition, this.season, this.key);
      console.log(standings);
      this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: flex;
            justify-content: center;
          }
          * {
            margin: 0;
            padding: 0;
          }
          h1 {
            display: flex;
            width: 100%;
            justify-content: var(--h1-position, center);
          }
        </style>
        <h1>${standings.competition.name}</h1>
      `;
    }
}

customElements.define('gm-football-standings', FootballStandings);
