//[Dashboard Javascript]

//Project:	UniquePro Admin - Responsive Admin Template
//Primary use:   Used only for the main dashboard (index.html)


$(function () {

  'use strict';
	
//------------echarts1

if( $('#e_chart_1').length > 0 ){
		var eChart_3 = echarts.init(document.getElementById('e_chart_1'));
		var colors = ['#6F88EE', '#D071E3'];
		var option3 = {
			tooltip: {
				backgroundColor: 'rgba(33,33,33,1)',
				borderRadius:0,
				padding:10,
				textStyle: {
					color: '#fff',
					fontStyle: 'normal',
					fontWeight: 'normal',
					fontFamily: "'Nunito Sans', sans-serif",
					fontSize: 12
				}	
			},
			series: [
				{
					name:'',
					type:'pie',
					radius: ['50%', '80%'],
					color: ['#6F88EE', '#21ACE3', '#D071E3', '#F13A2E'],
					label: {
						normal: {
							formatter: '{b}\n{d}%'
						},
				  
					},
					data:[
						{value:512, name:'OPD'},
						{value:849, name:'ICU'},
						{value:745, name:'OT'},
						{value:469, name:'Heart'},
					]
				}
			]
		};
		eChart_3.setOption(option3);
		eChart_3.resize();
};

//------------echarts2

if( $('#e_chart_2').length > 0 ){
		var eChart_2 = echarts.init(document.getElementById('e_chart_2'));
		var option = {
			color: ['#6F88EE', '#21ACE3', '#D071E3', '#F13A2E'],		
			tooltip: {
				trigger: 'axis',
				backgroundColor: 'rgba(33,33,33,1)',
				borderRadius:0,
				padding:10,
				axisPointer: {
					type: 'cross',
					label: {
						backgroundColor: 'rgba(33,33,33,1)'
					}
				},
				textStyle: {
					color: '#fff',
					fontStyle: 'normal',
					fontWeight: 'normal',
					fontFamily: "'Nunito Sans', sans-serif",
					fontSize: 12
				}	
			},
			toolbox: {
				show: true,
				orient: 'vertical',
				left: 'right',
				top: 'center',
				showTitle: false,
				feature: {
					mark: {show: true},
					magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
					restore: {show: true},
				}
			},
			grid: {
				left: '5%',
				right: '5%',
				bottom: '5%',
				containLabel: true
			},
			xAxis : [
				{
					type : 'category',
					data : ['FB','TW','G+','INSTA','IN','BE'],
					axisLine: {
						show:false
					},
					axisLabel: {
						textStyle: {
							color: '#878787'
						}
					},
				}
			],
			yAxis : [
				{
					type : 'value',
					axisLine: {
						show:false
					},
					axisLabel: {
						textStyle: {
							color: '#878787'
						}
					},
					splitLine: {
						show: false,
					}
				}
			],
			series : [
				{
					name:'Active',
					type:'bar',
					data:[485, 545, 412, 512, 398, 474]
				},
				{
					name:'Closed',
					type:'bar',
					stack: 'st1',
					data:[210, 102, 159, 200, 158, 48]
				},
				{
					name:'Hold',
					type:'bar',
					stack: 'st1',
					data:[248, 248, 154, 235, 128, 325]
				},
				{
					name:'Pending',
					type:'bar',
					stack: 'st1',
					data:[154, 125, 254, 189, 245, 342]
				}
			]
		};

		eChart_2.setOption(option);
		eChart_2.resize();
	}

	
// Morris-chart
	
	Morris.Area({
        element: 'morris-area-chart2',
        data: [{
            period: '2010',
            SiteA: 0,
            SiteB: 0,
            
        }, {
            period: '2011',
            SiteA: 130,
            SiteB: 100,
            
        }, {
            period: '2012',
            SiteA: 80,
            SiteB: 60,
            
        }, {
            period: '2013',
            SiteA: 70,
            SiteB: 200,
            
        }, {
            period: '2014',
            SiteA: 180,
            SiteB: 150,
            
        }, {
            period: '2015',
            SiteA: 105,
            SiteB: 90,
            
        },
         {
            period: '2016',
            SiteA: 250,
            SiteB: 150,
           
        }],
        xkey: 'period',
        ykeys: ['SiteA', 'SiteB'],
        labels: ['Site A', 'Site B'],
        pointSize: 0,
        fillOpacity: 0.9,
        pointStrokeColors:['#667add', '#1F9DCE'],
        behaveLikeLine: true,
        gridLineColor: '#e0e0e0',
        lineWidth: 0,
        smooth: false,
        hideHover: 'auto',
        lineColors: ['#667add', '#1F9DCE'],
        resize: true
        
    });
	


}); // End of use strict
