export function dy_geoOption(input_data) {
    return {
        backgroundColor: '#2c343c',
        title: {
            text: '人员分布',
            textStyle: {
                color: '#ccc'
            }
        },
        // 鼠标悬浮显示省份名称
        tooltip: {
            formatter(params, ticket, callback) {
                // params.data 就是series配置项中的data数据遍历
                let localValue;
                if (params.data) {
                    localValue = params.data.value;
                } else {// 为了防止没有定义数据的时候报错写的
                    localValue = 0;
                }
                let htmlStr = `<div style='font-size:18px;'> ${params.name}</div>
                        <p style='text-align:left;margin-top:-4px;'>简历份数：${localValue}`;
                return htmlStr;
            },
            backgroundColor: "#ff7f50", //提示标签背景颜色
            textStyle: { color: "#fff" }, //提示标签字体颜色
            padding: [5, 10, 0, 10],  // 设置上下的内边距为 5,0，左右的内边距为 10
        },
        visualMap: {
            show: true,
            bottom: 20,
            left: 100,
            // left: 50, top: '30%', right: 0, bottom: 0,  //定位的左上角以及右下角分别所对应的经纬度
            text: ["10", "0"],
            min: 0,
            max: 10,
            itemHeight: 200,  //图形的高度，即长条的高度。
            color: [
                '#ee6666',//红色
                '#fc8452',//橙色
                '#fac858',//黄色
                '#3ba272',//绿色
                '#91cc75',//浅绿
                '#5470c6',//蓝色
                '#73c0de',//淡蓝
            ],
            textStyle: {
                color: '#ccc'
            },
        },
        geo: {
            map: "china",
            roam: false,
            zoom: 1.2,
            // label: {
            //     normal: {
            //         show: true,
            //         fontSize: "10",
            //         color: "#6169ad", // 字体颜色
            //     },
            //     emphasis: {
            //         // 动态展示的样式
            //         color: "#010D39",
            //     },
            // },
            emphasis: {  // 地图区域的多边形 图形样式。
                borderColor: "#ffffff",//未选中的状态
                areaColor: "#D8E9FD", //背景颜色
                label: {
                    show: true, //显示名称
                },
                itemStyle: {  //选中的状态// 高亮状态下的多边形和标签样式
                    shadowBlur: 20,
                    shadowColor: "rgba(0, 0, 0, 0.5)",
                    borderColor: "#fff",
                    areaColor: "#DA3A3A",
                },
            },
        },
        series: [
            {
                name: "数量占比",
                type: "map",
                geoIndex: 0,
                label: {
                    show: true
                },
                data: input_data
            },

        ],
    }
}

export function dy_pieOption_age(input_data) {
    return {
        backgroundColor: '#2c343c',
        title: {
            text: '年龄分布',
            textStyle: {
                color: '#ccc'
            }
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            top: '5%',
            left: 'center',
            textStyle: {
                color: '#ccc'
            },
        },
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: ['30%', '50%'],
                center: ['50%', '50%'],
                // adjust the start angle
                startAngle: 180,
                label: {
                    show: true,
                    formatter(param) {
                        // correct the percentage
                        return param.name + ' (' + param.percent + '%)';
                    }
                },
                data: [
                    { value: input_data['20_25'], name: '20~25岁' },
                    { value: input_data['25_30'], name: '25~30岁' },
                    { value: input_data['30+'], name: '30岁以上' },
                ]
            }
        ]
    }
}

export function dy_pieOption_degree(input_data) {
    return {
        backgroundColor: '#2c343c',
        title: {
            text: '学历分布',
            textStyle: {
                color: '#ccc'
            }
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            top: '5%',
            orient: 'horizontal',
            left: 'center',
            textStyle: {
                color: '#ccc'
            },
        },
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: '50%',
                label: {
                    show: true,
                    formatter(param) {
                        // correct the percentage
                        return param.name + ' (' + param.percent + '%)';
                    }
                },
                data: [
                    { value: input_data.本科以下, name: '本科以下' },
                    { value: input_data.本科, name: '本科' },
                    { value: input_data.研究生, name: '研究生' },
                    { value: input_data.博士, name: '博士' },
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    }
}

export function dy_pieOption_school(input_data) {
    return {
        backgroundColor: '#2c343c',
        title: {
            text: '毕业院校分布',
            left: 'center',
            top: 20,
            textStyle: {
                color: '#ccc'
            }
        },
        tooltip: {
            trigger: 'item'
        },
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: '55%',
                center: ['50%', '50%'],
                data: [
                    { value: input_data['985类'], name: '985类' },
                    { value: input_data['211类'], name: '211类' },
                    { value: input_data['其他类'], name: '其他类' },
                ].sort(function (a, b) {
                    return a.value - b.value;
                }),
                roseType: 'radius',
                label: {
                    show: true,
                    formatter(param) {
                        // correct the percentage
                        return param.name + ' (' + param.percent + '%)';
                    }
                },
                labelLine: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                },
                itemStyle: {
                    color: '#c23531',
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                },
                animationType: 'scale',
                animationEasing: 'elasticOut',
                animationDelay: function (idx) {
                    return Math.random() * 200;
                }
            }
        ]
    }
}

export function dy_pieOption_year(input_data) {
    return {
        backgroundColor: '#2c343c',
        title: {
            text: '工作经验分布',
            left: 'center',
            top: 20,
            textStyle: {
                color: '#ccc'
            }
        },
        tooltip: {
            trigger: 'item'
        },
        // visualMap: {
        //     show: false,
        //     min: 80,
        //     max: 600,
        //     inRange: {
        //         colorLightness: [0, 1]
        //     }
        // },
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: '55%',
                center: ['50%', '50%'],
                label: {
                    show: true,
                    formatter(param) {
                        return param.name + ' (' + param.percent + '%)';
                    }
                },
                data: [
                    { value: input_data['0_3'], name: '0~3年工作经历' },
                    { value: input_data['0_3'], name: '3~6年工作经历' },
                    { value: input_data['6+'], name: '6年以上工作经历' },
                ].sort(function (a, b) {
                    return a.value - b.value;
                }),
                roseType: 'radius',
                labelLine: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                },
                itemStyle: {
                    color: '#6699FF',
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                },
                animationType: 'scale',
                animationEasing: 'elasticOut',
                animationDelay: function (idx) {
                    return Math.random() * 200;
                }
            }
        ]
    }
}