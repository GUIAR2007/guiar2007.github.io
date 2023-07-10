window.addEventListener('DOMContentLoaded', function() {
  var data = [
    [20, 40, 60, 80], // Datos de la pregunta 1
    [7, 14, 4, 4], // Datos de la pregunta 2
    [3, 9, 7, 8, 3] // Datos de la pregunta 3
  ];

  var options = [
    ['1-2 Horas', '2-3 Horas', '3-4 Horas', 'No Salgo'], // Opciones de la pregunta 1
    ['Frecuentemente', 'A veces', 'No mucho', 'Nunca'], // Opciones de la pregunta 2
    ['Voley', 'Futbol', 'Basquet', 'Balon mano', 'Otros'] // Opciones de la pregunta 3
  ];

  for (var i = 0; i < data.length; i++) {
    var questionNumber = i + 1;
    var canvasId = 'barChart' + questionNumber;
    var ctx = document.getElementById(canvasId).getContext('2d');

    var chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: options[i],
        datasets: [{
          label: 'Respuestas',
          data: data[i],
          backgroundColor: 'blue'
        }]
      },
      options: {
        scales: {
          x: {
            beginAtZero: true
          },
          y: {
            beginAtZero: true
          }
        },
        plugins: {
          title: {
            display: true,
            text: 'Respuestas' // Título del gráfico
          }
        }
      }
    });
  }
});
