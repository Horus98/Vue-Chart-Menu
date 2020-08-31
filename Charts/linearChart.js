const linear = new Vue({
    el: '#linear',
    components: {
        apexchart: VueApexCharts,
    },
    data: {
        series: [{
            name: "",
            data: [],
        }],
        chartOptions: {
            chart: {
                height: 350,
                type: 'line',
                zoom: {
                    enabled: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth',
                colors: ['#CD5C5C'],
            },
            title: {
                text: 'Ventas históricas',
                align: 'left'
            },
            grid: {
                row: {
                    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                    opacity: 0.5
                },
            },
            xaxis: {
                categories: [],
            }
        },
    },
    created: function () {
        let dates = [];
        let amounts = [];
        for (const item of amountsPerDay) {
            dates.push(item.date);
            amounts.push(item.amount);
        }
        this.series = [{
            name: "Cantidad",
            data: amounts
        }];

        this.chartOptions.xaxis.categories = dates;
    }
})