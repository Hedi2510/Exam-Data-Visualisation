fetch('data.json')
  .then((response) => response.json())
  .then((data) => run_visualization(data));

function run_visualization(data) {
  // Tri des données par population
  sortByCountryPopulation(data);

  // Sélection des 30 premiers pays avec la plus grande population
  const top30Countries = data.slice(0, 30);

  // Extraction des noms de pays et des populations
  const countries = top30Countries.map((country) => country.country);
  const populations = top30Countries.map((country) => country.population);

  // Création du graphique en barres
  const trace = {
    x: populations,
    y: countries,
    type: 'bar',
    orientation: 'h',
  };

  const layout = {
    title: 'Les 30 pays avec la plus grande population',
    xaxis: {
      title: 'Population',
    },
    yaxis: {
      title: 'Pays',
    },
  };

  const config = {
    responsive: true,
  };

  Plotly.newPlot('data-viz', [trace], layout, config);
}

function sortByCountryPopulation(data) {
  data.sort((a, b) => b.population - a.population);
}
