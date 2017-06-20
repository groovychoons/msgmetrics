
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

  // Step 5: Create the timeline chart.

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

  var bounce = new gapi.analytics.googleCharts.DataChart({
    reportType: 'ga',
    query: {
      'dimensions': 'ga:date',
      'metrics': 'ga:bounceRate',
      'start-date': '30daysAgo',
      'end-date': 'today',
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

  // Step 6: Hook up the components to work together.

  gapi.analytics.auth.on('success', function(response) {
    viewSelector.execute();
  });

  viewSelector.on('change', function(ids) {
    var newIds = {
      query: {
        ids: ids
      }
    }
    conversion.set(newIds).execute();
    bounce.set(newIds).execute();
    visitors.set(newIds).execute();
    revenue.set(newIds).execute();

  });
});