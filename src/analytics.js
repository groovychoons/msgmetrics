
(function(w,d,s,g,js,fs){
    g=w.gapi||(w.gapi={});g.analytics={q:[],ready:function(f){this.q.push(f);}};
    js=d.createElement(s);fs=d.getElementsByTagName(s)[0];
    js.src='https://apis.google.com/js/platform.js';
    fs.parentNode.insertBefore(js,fs);js.onload=function(){g.load('analytics');};
} (window,document,'script'));

gapi.analytics.ready(function() {

  // Authorize the user.

  var CLIENT_ID = '900475442837-f6q472so93tbh7avr1khq7aervmmf2cg.apps.googleusercontent.com';
  var GID = 'ga:2676250';

  gapi.analytics.auth.authorize({
    container: 'embed-api-auth-container',
    clientid: CLIENT_ID,
  });

  // Step 4: Create the view selector.

  var viewSelector = new gapi.analytics.ViewSelector({
    container: 'view-selector',
  })

    viewSelector.on('change', function(ids) {
    var newIds = {
      query: {
        ids: ids
      }
    }
    conversion.set(newIds).execute();
    visitors.set(newIds).execute();
    bouncerate.set(newIds).execute();
    renderTopBrowsersChart(ids);
    revenue.set(newIds).execute();

  });

  var conversion = new gapi.analytics.googleCharts.DataChart({
    reportType: 'ga',
    query: {
      'dimensions': 'ga:date',
      'metrics': 'ga:transactionsPerSession',
      'start-date': '7daysAgo',
      'end-date': 'today',
    },
    chart: {
      type: 'LINE',
      container: 'Conversion Rate'
    }
  });

  var bouncerate = new gapi.analytics.googleCharts.DataChart({
    reportType: 'ga',
    query: {
      'dimensions': 'ga:date',
      'metrics': 'ga:bounceRate',
      'start-date': '7daysAgo',
      'end-date': 'today'
    },
    chart: {
      type: 'LINE',
      container: 'Bounce Rate'
    }
  });

  var visitors = new gapi.analytics.googleCharts.DataChart({
    reportType: 'ga',
    query: {
      'dimensions': 'ga:date',
      'metrics': 'ga:users',
      'start-date': '30daysAgo',
      'end-date': 'today',
    },
    chart: {
      type: 'LINE',
      container: 'Visitors'
    }
  });

  var revenue = new gapi.analytics.googleCharts.DataChart({
    reportType: 'ga',
    query: {
      'dimensions': 'ga:date',
      'metrics': 'ga:transactionRevenue',
      'start-date': '30daysAgo',
      'end-date': 'today',
    },
    chart: {
      type: 'LINE',
      container: 'Revenue'
    }
  });

    /**
   * Draw the a chart.js doughnut chart with data from the specified view that
   * show the top 5 browsers over the past seven days.
   */
  function renderTopBrowsersChart(ids) {

    query({
      'ids': ids,
      'dimensions': 'ga:date',
      'metrics': 'ga:bounceRate',
      'start-date': '7daysAgo',
      'end-date': 'today'
    })
    .then(function(response) {

      var data = [];
      var labels = [];

      response.rows.forEach(function(row, i) {
        data.push(+row[1]);
        labels.push(row[0]);
      });

      localStorage.setItem("bounce_data",  JSON.stringify(data));
      localStorage.setItem("bounce_labels",  JSON.stringify(labels));
      
    });
  }


  function query(params) {
    return new Promise(function(resolve, reject) {
      var data = new gapi.analytics.report.Data({query: params});
      data.once('success', function(response) { resolve(response); })
          .once('error', function(response) { reject(response); })
          .execute();
    });
  }

  // Step 6: Hook up the components to work together.

  gapi.analytics.auth.on('success', function(response) {
    viewSelector.execute();
  });


});