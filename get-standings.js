export const getStandings = async (competition, season, publicKey) => {
    const baseUrl = 'https://api.football-data.org/v2';
    const standingsEndpoint = `competitions/${competition}/standings?season=${season}`
    const headers = { 'X-Auth-Token': publicKey };
    const response = await fetch(`${baseUrl}/${standingsEndpoint}`, { headers });
    return response.json();
};
