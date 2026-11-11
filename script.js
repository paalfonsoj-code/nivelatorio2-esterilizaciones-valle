new Chart(document.getElementById("municipiosChart"), {
    type: "bar",
    data: {
        labels: ["Cali", "Obando", "Palmira", "Tuluá"],
        datasets: [{
            label: "Esterilizaciones",
            data: [120, 95, 80, 60]
        }]
    }
});

new Chart(document.getElementById("especieChart"), {
    type: "pie",
    data: {
        labels: ["Caninos", "Felinos"],
        datasets: [{
            data: [60, 40]
        }]
    }
});

new Chart(document.getElementById("sexoChart"), {
    type: "bar",
    data: {
        labels: ["Hembras", "Machos"],
        datasets: [{
            label: "Total",
            data: [70, 30]
        }]
    }
});