let pageNumber = 1;
function getPlanets(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const planets = data.results;
      let table = "<table>";
      table += `
      <tr>
      <th>Planet Name</th>
      <th>Population</th>
      <th>Climate</th>
      <th>Gravity</th>
      </>`;
      for (let i = 0; i < 10; i++) {
        table +=
          "<tr><td>" +
          planets[i].name +
          "</td><td>" +
          planets[i].population +
          "</td><td>" +
          planets[i].climate +
          "</td><td>" +
          planets[i].gravity +
          "</td></tr>";
      }
      table += "</table>";
      document.getElementById("planetTable").innerHTML = table;
      if (pageNumber === 1) {
        let button = "<button onclick='nextPage()'>NEXT 10</button>";
        document.getElementById("planetTable").innerHTML += button;
      } else {
        let button = "<button onclick='previousPage()'>PREVIOUS 10</button>";
        document.getElementById("planetTable").innerHTML += button;
      }
    });
}

function nextPage() {
  pageNumber++;
  getPlanets(`https://swapi.dev/api/planets/?page=${pageNumber}`);
}

function previousPage() {
  pageNumber--;
  getPlanets(`https://swapi.dev/api/planets/?page=${pageNumber}`);
}