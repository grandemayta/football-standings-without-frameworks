import { getStandings } from './get-standings.js';

class FootballStandings extends HTMLElement {
    get competition() {
      return this.getAttribute('competition');
    }

    get season() {
      return this.getAttribute('season');
    }

    get key() { return this.getAttribute('key'); }

    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
      this.render();    
    }

    async render() {
      const standings = await getStandings(this.competition, this.season, this.key);
      console.log(standings);
      this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: flex;
            flex-direction: column;
            justify-content: center;
            min-height: 100%;
            margin: 0 auto;
            font-size: 1.2em;
            background-color: #fff;
            box-sizing: border-box;
          }

          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          h1 {
            display: flex;
            width: 100%;
            justify-content: var(--h1-position, center);
            padding: 0.5em;
            color: #fff;
            background: #3F51B5;
          }

          table { 
            width: 100%;
            border-spacing: 0px;
          }

          table th, table td { 
            text-align: left; 
            padding: 0.9em 0;
          }

          table th:first-child, table td:first-child, table th:last-child, table td:last-child {
            padding-left: 0.9em;
          }

          table tr td { 
            border-top: 1px solid #f0f0f0;
          }

          table tr td img {
            width: 16px;
            height: 16px;
            vertical-align: middle;
          }

          table tr:nth-child(even) {background: #f0f0f0}

          @media screen and (max-width: 500px) {
            .hide-cell {
              display: none;
            }
          }
        </style>
        <h1>${standings.competition.name}</h1>
        <table>
          <tr>
            <th colspan="2">TEAMS</th>
            <th>MP</th>
            <th class="hide-cell">W</th>
            <th class="hide-cell">D</th>
            <th class="hide-cell">L</th>
            <th>PTS</th>
            <th class="hide-cell">GF</th>
          </tr>
          ${standings.standings[0].table.reduce((acc, standing) => {
            return `
            ${acc}
            <tr>
              <td>${standing.position}</td>
              <td>
                <img class="hide-cell" src=${standing.team.crestUrl} />
                ${standing.team.name}
              </td>
              <td>${standing.playedGames}</td>
              <td class="hide-cell">${standing.won}</td>
              <td class="hide-cell">${standing.draw}</td>
              <td class="hide-cell">${standing.lost}</td>
              <td>${standing.points}</td>
              <td class="hide-cell">${standing.goalsFor}</td>
            </tr>
            `
          }, '')}
        </table>
      `;
    }
}

customElements.define('gm-football-standings', FootballStandings);
