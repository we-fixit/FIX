//[Dashboard Javascript]

//Project:	UniquePro Admin - Responsive Admin Template
//Primary use:   Used only for the main dashboard (index.html)


$(function () {

  'use strict';
	

	
//------------echarts1

if( $('#e_chart_1').length > 0 ){
		var eChart_1 = echarts.init(document.getElementById('e_chart_1'));
		var option = {
			xAxis: {
				type: 'time',
				boundaryGap: false,
				axisLine: {
					show:false
				},
				axisLabel: {
					textStyle: {
						color: '#878787',
						fontStyle: 'normal',
						fontWeight: 'normal',
						fontFamily: "'Roboto', sans-serif",
						fontSize: 12
					}
				},
				splitLine: {
					show: false,
				},
			},
			yAxis: {
				data: ['1', '2', '3'],
				axisLine: {
						show:false
				},
				axisLabel: {
					textStyle: {
						color: '#878787',
						fontStyle: 'normal',
						fontWeight: 'normal',
						fontFamily: "'Roboto', sans-serif",
						fontSize: 12
					}
				},
				splitLine: {
					show: false,
				},
				boundaryGap: [0, '100%']
			},
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
					fontFamily: "'Roboto', sans-serif",
					fontSize: 12
				}	
			},
			series: [
				{
					name: 'ab1',
					type: 'bar',
					stack: '1',
					itemStyle: {
						normal: {
							color: 'rgba(0,0,0,0)'
						}
					},
					data: [
						new Date("2018/09/2"),
						new Date("2018/09/8"),
						new Date("2018/09/18"),
					]
				},{
					name: 'ab2',
					type: 'bar',
					stack: '1',
					itemStyle: {
						normal: {
							color: '#6F88EE',
							barBorderRadius: 5,
							shadowBlur: 5,
							shadowColor: 'rgba(0, 0, 0, .2)'
						}
					},
					data: [
						new Date("2018/09/19"),
						new Date("2018/09/29"),
						new Date("2018/09/28"),
					]
				}
			]
		};
		eChart_1.setOption(option);
		eChart_1.resize();
	}

//------------echarts3	
	
if( $('#e_chart_3').length > 0 ){
		var eChart_3 = echarts.init(document.getElementById('e_chart_3'));
		var dataBJ = [
			[55,9,56,0.46,18,6,1],
			[25,11,21,0.65,34,9,2],
			[56,7,63,0.3,14,5,3],
			[33,7,29,0.33,16,6,4],
			[42,24,44,0.76,40,16,5],
			[82,58,90,1.77,68,33,6],
			[74,49,77,1.46,48,27,7],
			[78,55,80,1.29,59,29,8],
			[267,216,280,4.8,108,64,9],
			[185,127,216,2.52,61,27,10],
			[39,19,38,0.57,31,15,11],
			[41,11,40,0.43,21,7,12],
			[64,38,74,1.04,46,22,13],
			[108,79,120,1.7,75,41,14],
			[108,63,116,1.48,44,26,15],
			[33,6,29,0.34,13,5,16],
			[94,66,110,1.54,62,31,17],
			[186,142,192,3.88,93,79,18],
			[57,31,54,0.96,32,14,19],
			[22,8,17,0.48,23,10,20],
			[39,15,36,0.61,29,13,21],
			[94,69,114,2.08,73,39,22],
			[99,73,110,2.43,76,48,23],
			[31,12,30,0.5,32,16,24],
			[42,27,43,1,53,22,25],
			[154,117,157,3.05,92,58,26],
			[234,185,230,4.09,123,69,27],
			[160,120,186,2.77,91,50,28],
			[134,96,165,2.76,83,41,29],
			[52,24,60,1.03,50,21,30],
			[46,5,49,0.28,10,6,31]
		];

		var dataGZ = [
			[26,37,27,1.163,27,13,1],
			[85,62,71,1.195,60,8,2],
			[78,38,74,1.363,37,7,3],
			[21,21,36,0.634,40,9,4],
			[41,42,46,0.915,81,13,5],
			[56,52,69,1.067,92,16,6],
			[64,30,28,0.924,51,2,7],
			[55,48,74,1.236,75,26,8],
			[76,85,113,1.237,114,27,9],
			[91,81,104,1.041,56,40,10],
			[84,39,60,0.964,25,11,11],
			[64,51,101,0.862,58,23,12],
			[70,69,120,1.198,65,36,13],
			[77,105,178,2.549,64,16,14],
			[109,68,87,0.996,74,29,15],
			[73,68,97,0.905,51,34,16],
			[54,27,47,0.592,53,12,17],
			[51,61,97,0.811,65,19,18],
			[91,71,121,1.374,43,18,19],
			[73,102,182,2.787,44,19,20],
			[73,50,76,0.717,31,20,21],
			[84,94,140,2.238,68,18,22],
			[93,77,104,1.165,53,7,23],
			[99,130,227,3.97,55,15,24],
			[146,84,139,1.094,40,17,25],
			[113,108,137,1.481,48,15,26],
			[81,48,62,1.619,26,3,27],
			[56,48,68,1.336,37,9,28],
			[82,92,174,3.29,0,13,29],
			[106,116,188,3.628,101,16,30],
			[118,50,0,1.383,76,11,31]
		];

		var dataSH = [
			[91,45,125,0.82,34,23,1],
			[65,27,78,0.86,45,29,2],
			[83,60,84,1.09,73,27,3],
			[109,81,121,1.28,68,51,4],
			[106,77,114,1.07,55,51,5],
			[109,81,121,1.28,68,51,6],
			[106,77,114,1.07,55,51,7],
			[89,65,78,0.86,51,26,8],
			[53,33,47,0.64,50,17,9],
			[80,55,80,1.01,75,24,10],
			[117,81,124,1.03,45,24,11],
			[99,71,142,1.1,62,42,12],
			[95,69,130,1.28,74,50,13],
			[116,87,131,1.47,84,40,14],
			[108,80,121,1.3,85,37,15],
			[134,83,167,1.16,57,43,16],
			[79,43,107,1.05,59,37,17],
			[71,46,89,0.86,64,25,18],
			[97,71,113,1.17,88,31,19],
			[84,57,91,0.85,55,31,20],
			[87,63,101,0.9,56,41,21],
			[104,77,119,1.09,73,48,22],
			[87,62,100,1,72,28,23],
			[168,128,172,1.49,97,56,24],
			[65,45,51,0.74,39,17,25],
			[39,24,38,0.61,47,17,26],
			[39,24,39,0.59,50,19,27],
			[93,68,96,1.05,79,29,28],
			[188,143,197,1.66,99,51,29],
			[174,131,174,1.55,108,50,30],
			[187,143,201,1.39,89,53,31]
		];

		var lineStyle = {
			normal: {
				wiDth: 1,
				opacity: 0.5
			}
		};
		var option = {
			tooltip: {},
			visualMap: {
				color: ['#21ACE3 ', '#D071E3']
			},
			splitArea: {
				areaStyle: {
					color: '#D071E3',
					opacity: 0,
				}
			},
			radar: {
			   indicator : [
				   { text: 'IE8-', max: 400},
				   { text: 'IE9+', max: 400},
				   { text: 'Safari', max: 400},
				   { text: 'Firefox', max: 400},
				   { text: 'Chrome', max: 400}
				],
				name: {
					textStyle: {
						color: '#878787',
						fontFamily: "'Roboto', sans-serif",
						fontSize: 12
					}
				},
				splitLine: {
					lineStyle: {
						color: [
							'rgba(33, 33, 33, 0.1)', 'rgba(33, 33, 33, 0.1)',
							'rgba(33, 33, 33, 0.1)', 'rgba(33, 33, 33, 0.1)',
							'rgba(33, 33, 33, 0.1)', 'rgba(33, 33, 33, 0.1)'
						].reverse()
					}
				},
			},
			series : (function (){
				var series = [];
				for (var i = 1; i <= 28; i++) {
					series.push({
						name: i + 2000,
						type: 'radar',
						symbol: 'none',

						itemStyle: {
							normal: {
								lineStyle: {
								  width:1
								}
							},
							emphasis : {
								areaStyle: {color:'rgba(102,122,221,0.3)'}
							}
						},
						data:[
						  {
							value:[
								(40 - i) * 10,
								(38 - i) * 4 + 60,
								i * 5 + 10,
								i * 9,
								i * i /2
							],
							name:i + 2000
						  }
						]
					});
				}
				return series;
			})()
		};
		eChart_3.setOption(option);
		eChart_3.resize();
	}

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
        element: 'morris-area-chart',
        data: [{
            period: '2010',
            tv: 50,
            mobile: 80,
            laptop: 20
        }, {
            period: '2011',
            tv: 130,
            mobile: 100,
            laptop: 80
        }, {
            period: '2012',
            tv: 80,
            mobile: 60,
            laptop: 70
        }, {
            period: '2013',
            tv: 70,
            mobile: 200,
            laptop: 140
        }, {
            period: '2014',
            tv: 180,
            mobile: 150,
            laptop: 140
        }, {
            period: '2015',
            tv: 105,
            mobile: 100,
            laptop: 80
        },
         {
            period: '2016',
            tv: 250,
            mobile: 150,
            laptop: 200
        }],
        xkey: 'period',
        ykeys: ['tv', 'mobile', 'laptop'],
        labels: ['TV', 'Mobile', 'Laptop'],
        pointSize: 3,
        fillOpacity: 0.1,
        pointStrokeColors:['#ba69aa', '#69cce0', '#ef483e'],
        behaveLikeLine: true,
        gridLineColor: '#e0e0e0',
        lineWidth: 3,
        hideHover: 'auto',
        lineColors: ['#ba69aa', '#69cce0', '#ef483e'],
        resize: true
        
    });

}); // End of use strict
