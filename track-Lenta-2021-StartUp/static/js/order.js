
function func() {
  var speedData =[];
  var chartOptions = [];
  Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';

  Chart.defaults.global.defaultFontColor = '#292b2c';

  var speedCanvas_old = document.getElementById("RevChart");
  var speedCanvas = document.createElement("canvas");
  speedCanvas.id = "RevChart";
  speedCanvas_old.parentNode.replaceChild(speedCanvas,speedCanvas_old);

  Chart.defaults.global.defaultFontFamily = "Lato";
  Chart.defaults.global.defaultFontSize = 18;
  var dtable = document.getElementById("customer-table");
  var lbls = [];
  var dta = [];

  for (i = 0; i < dtable.rows.length; i++) {
    var lb = dtable.rows.item(i).cells.item(1).innerHTML;
    lbls[i] = lb;
    var dt = dtable.rows.item(i).cells.item(3).innerHTML;
    if (dt > 100000)
      dt = Math.random() * 100000;
    dta[i] = dt;
  }

  lbls.sort();

   speedData = {
    labels: lbls,
    datasets: [{
      label: "Выручка",
      lineTension: 0,
      borderColor: 'blue',
      pointBorderColor: 'orange',
      fill: false,
      data: dta,
      pointRadius: 2,
      pointBackgroundColor: 'yellow'
    }]
  };

  chartOptions = {
    legend: {
      display: true,
      position: 'top',
      labels: {
        boxWidth: 80,
        fontColor: 'black'
      }
    }
  };

  var lineChart = new Chart(speedCanvas, {
    type: 'line',
    data: speedData,
    options: chartOptions
  });

  var speedCanvas_old = document.getElementById("SelChart");
  var speedCanvas = document.createElement("canvas");
  speedCanvas.id = "SelChart";
  speedCanvas_old.parentNode.replaceChild(speedCanvas,speedCanvas_old);
  Chart.defaults.global.defaultFontFamily = "Lato";
  Chart.defaults.global.defaultFontSize = 18;
  var dtable = document.getElementById("customer-table");
  var lbls = [];
  var dta = [];
  for (i = 0; i < dtable.rows.length; i++) {
    var lb = dtable.rows.item(i).cells.item(1).innerHTML;
    lbls[i] = lb;
    var dt = dtable.rows.item(i).cells.item(2).innerHTML;
    if (dt > 100000)
      dt = Math.random() * 100000;
    dta[i] = dt;
  }


  var speedData = {
    labels: lbls,
    datasets: [{
      label: "Спрос",
      lineTension: 0,
      borderColor: 'yellow',
      pointBorderColor: 'orange',
      fill: false,
      data: dta,
      pointRadius: 2,
      pointBackgroundColor: 'blue'
    }]
  };

  var chartOptions = {
    legend: {
      display: true,
      position: 'top',
      labels: {
        boxWidth: 80,
        fontColor: 'black'
      }
    }
  };

  var lineChart = new Chart(speedCanvas, {
    type: 'line',
    data: speedData,
    options: chartOptions
  });

}