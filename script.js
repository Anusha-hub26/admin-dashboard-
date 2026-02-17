function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}

const ctx = document.getElementById('myChart').getContext('2d');

new Chart(ctx, {
  type: 'line',
  data: {
    labels: [],
    datasets: [{
      label: '',
      data: [],
      borderColor: '#00f2fe',
      backgroundColor: 'rgba(0,242,254,0.2)',
      tension: 0.4,
      fill: true
    }]
  },
  options: {
    responsive: true,
    animation: {
      duration: 1500
    },
    plugins: {
      legend: {
        display: false
      }
    }
  }
});


