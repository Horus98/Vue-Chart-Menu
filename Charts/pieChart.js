const pie = new Vue({
    el: '#pie',
    components: {
        apexchart: VueApexCharts,
    },
    data: {
        series: [],
        chartOptions: {
            chart: {
                width: 575,
                type: 'pie',
            },
            labels: [],
            responsive: [{
                breakpoint: 350,
                options: {
                    chart: {
                        width: 300 ,
                    },
                    legend: {
                        position: 'bottom'
                    }
                }},
                {
                    breakpoint: 570,
                    options: {
                        chart: {
                            width: 500 ,
                        },
                        legend: {
                            position: 'bottom'
                        }
                    },
                
            }],
            title: {
                text: 'Porcentaje de ventas históricas',
                align: 'left'
            },
        },
    },
    created: function () {
        let names = [];
        let amounts = [];
        for (const item of historical) {
            names.push(item.name);
            amounts.push(item.amount);
        };
        this.series = amounts;
        this.chartOptions.labels = names;
    }
})