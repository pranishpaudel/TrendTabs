// script.js
async function fetchData() {
  try {
    const response = await fetch("http://localhost:3000/scrape-data", {
      method: "POST",
    });
    const data = await response.json();

    displayData(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    document.getElementById("loading").textContent = "Error fetching data";
  }
}

function displayData(data) {
  const tableBody = document.getElementById("nepse-table-body");
  const loadingDiv = document.getElementById("loading");

  loadingDiv.style.display = "none";
  tableBody.innerHTML = "";

  if (data.length > 0) {
    data.forEach((row) => {
      const tableRow = document.createElement("tr");

      row.forEach((cell) => {
        const td = document.createElement("td");
        td.textContent = cell;
        tableRow.appendChild(td);
      });

      tableBody.appendChild(tableRow);
    });
  } else {
    const noDataRow = document.createElement("tr");
    const noDataCell = document.createElement("td");
    noDataCell.textContent = "No data found";
    noDataCell.colSpan = 6;
    noDataRow.appendChild(noDataCell);
    tableBody.appendChild(noDataRow);
  }
}

// Automatically fetch data when the page loads
window.addEventListener("load", () => {
  document.getElementById("loading").style.display = "block";
  document.getElementById("loading").textContent = "Loading...";
  fetchData();
});

// Fetch data when the button is clicked
document.getElementById("scrap-button").addEventListener("click", () => {
  document.getElementById("loading").style.display = "block";
  document.getElementById("loading").textContent = "Loading...";
  fetchData();
});
