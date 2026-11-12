const municipiosCtx = document.getElementById('municipiosChart');

new Chart(municipiosCtx, {
    type: 'bar',
    data: {
        labels: ['Yumbo', 'Andalucía', 'Candelaria'],
        datasets: [{
            label: 'Registros',
            data: [48, 28, 20],
            backgroundColor: 'blue'
        }]
    }
});

const especieCtx = document.getElementById('especieChart');

new Chart(especieCtx, {
    type: 'pie',
    data: {
        labels: ['Felinos', 'Canino', 'Caninos'],
        datasets: [{
            data: [192, 190, 2],
            backgroundColor: [
                '#006699',
                '#28a745',
                '#ffc107'
            ]
        }]
    }
});

const sexoCtx = document.getElementById('sexoChart');

new Chart(sexoCtx, {
    type: 'bar',
    data: {
        labels: ['Hembras', 'Machos'],
        datasets: [{
            label: 'Registros',
            data: [192, 192],
            backgroundColor: [
                '#e83e8c',
                '#17a2b8'
            ]
        }]
    }
});