document.getElementById("campaignForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const budget = parseInt(document.getElementById("budget").value);
  const platform = document.getElementById("platform").value;

  let costPerClick = platform === "Google" ? 5 : 3;
  let clicks = Math.floor(budget / costPerClick);
  let impressions = clicks * 20;

  document.getElementById("clicks").textContent = clicks;
  document.getElementById("impressions").textContent = impressions;

  // Show result section
  document.getElementById("results").classList.remove("hidden");

  // Chart display
  const ctx = document.getElementById('performanceChart').getContext('2d');
  if (window.performanceChart) window.performanceChart.destroy();
  window.performanceChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Clicks', 'Impressions'],
      datasets: [{
        label: 'Performance Metrics',
        data: [clicks, impressions],
        backgroundColor: ['#3498db', '#2ecc71']
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false }
      }
    }
  });

  // Save to LocalStorage
  const campaign = { budget, platform, clicks, impressions };
  let campaigns = JSON.parse(localStorage.getItem("campaigns")) || [];
  campaigns.push(campaign);
  localStorage.setItem("campaigns", JSON.stringify(campaigns));
});
