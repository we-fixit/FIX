//[Dashboard Javascript]

//Project:	UniquePro Admin - Responsive Admin Template
//Primary use:   Used only for the main dashboard (index.html)


$(function () {

  'use strict';
	


	
//------------echarts1
	
if( $('#e_chart_1').length > 0 ){
		var eChart_1 = echarts.init(document.getElementById('e_chart_1'));
		var data = [];
		var labelData = [];
		for (var i = 0; i < 24; ++i) {
			data.push({
				value: Math.random() * 10 + 10 - Math.abs(i - 12),
				name: i + ':00'
			});
			labelData.push({
				value: 1,
				name: i + ':00'
			});
		}

		var option1 = {
			color: ['#D071E3'],
			tooltip: {
				backgroundColor: 'rgba(33,33,33,1)',
				borderRadius:0,
				padding:10,
				textStyle: {
					color: '#fff',
					fontStyle: 'normal',
					fontWeight: 'normal',
					fontFamily: "'Roboto', sans-serif",
					fontSize: 12
				}	
			},
			series: [{
				type: 'pie',
				data: data,
				roseType: 'area',
				itemStyle: {
					normal: {
						color: 'white',
						borderColor: '#21ACE3'
					}
				},
				labelLine: {
					normal: {
						show: false
					}
				},
				label: {
					normal: {
						show: false
					}
				}
			}, {
				type: 'pie',
				data: labelData,
				radius: ['75%', '85%'],
				zlevel: -2,
				itemStyle: {
					normal: {
						color: '#6F88EE',
						borderColor: 'white'
					}
				},
				label: {
					normal: {
						show:true
					}
				}
			}]
		};

		
		eChart_1.setOption(option1);
		eChart_1.resize();
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
	

// AREA CHART
    var area = new Morris.Area({
      element: 'revenue-chart',
      resize: true,
      data: [
        { y: '2017-01', a: 5,  b: 4 },
		{ y: '2017-02', a: 2,  b: 3 },
		{ y: '2017-03', a: 8,  b: 7 },
		{ y: '2017-04', a: 1,  b: 5 },
		{ y: '2017-05', a: 5,  b: 2 },
		{ y: '2017-06', a: 1,  b: 3 },
		{ y: '2017-07', a: 5,  b: 2 }
      ],
		xkey: 'y',
		ykeys: ['a', 'b'],
		labels: ['In store', 'Online'],
		fillOpacity: 1,
		lineWidth:1,
		lineColors: ['#6F88EE', '#21ACE3'],
		hideHover: 'auto',
		color: '#666666'
    });

	
// AREA CHART		
	
jQuery('#world-map-markers').vectorMap(
{
    map: 'world_mill_en',
    backgroundColor: '#fff',
    borderColor: '#818181',
    borderOpacity: 0.25,
    borderWidth: 1,
    color: '#f4f3f0',
    regionStyle : {
        initial : {
          fill : '#6F88EE'
        }
      },
    markerStyle: {
      initial: {
                    r: 9,
                    'fill': '#fff',
                    'fill-opacity':1,
                    'stroke': '#000',
                    'stroke-width' : 5,
                    'stroke-opacity': 0.4
                },
                },
    enableZoom: true,
    hoverColor: '#0a89c1',
    markers : [{
        latLng : [21.00, 78.00],
        name : 'I Love My India'
      
      }],
    hoverOpacity: null,
    normalizeFunction: 'linear',
    scaleColors: ['#b6d6ff', '#005ace'],
    selectedColor: '#c9dfaf',
    selectedRegions: [],
    showTooltip: true,
    onRegionClick: function(element, code, region)
    {
        var message = 'You clicked "'
            + region
            + '" which has the code: '
            + code.toUpperCase();

        alert(message);
    }
});
	
	

}); // End of use strict
