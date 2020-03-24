
   console.log('123');
  var myChart = echarts.init(document.getElementById('main'));
  var option = {
    title: {
        text: 'JavaScript语言排名变化'
    },
    tooltip:{},
    xAxis: {
        type: 'category',
        data: ['2000', '2005', '2010', '2015', '2020']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        name: '排名',
        type: 'line',
        data:[6,9,8,8,7]
    }]
  };
myChart.setOption(option);
 
