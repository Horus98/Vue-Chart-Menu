const app = new Vue({
    el: '#app',
    components: {
        apexchart: VueApexCharts,
    },
    data: {
        titulo : 'Ventas según ítem ',  
        dropdown : 'Período',
        historical: historical,
        daily: daily,
        weekly: weekly,
        monthly: monthly,
        yearly: yearly,
        series: [{
            data: [],
        }],
        chartOptions: {
            chart: {
                height: 350,
                type: 'bar',
            },
            title: {
                text: 'Ventas según ítem ',
                align: 'left'
            },
            plotOptions: {
                bar: {
                    columnWidth: '45%',
                    distributed: true
                }
            },
            dataLabels: {
                enabled: false
            },
            legend: {
                show: false
            },
            xaxis: {
                categories: [
                    1,2,3,4,5,6,7,8
                ],
                labels: {
                    style: {
                        fontSize: '12px'
                    }
                }
            }
        },
    },
    methods: {
        getData(time,drop) {
            this.dropdown = drop;
            let arr = [];
            for (const item of time) {
                arr.push(item.amount);
            }
            this.series = [{
                name: "Cantidad",
                data: arr
            }];
        },
        getNames() {
            let arr = [];
            for (const item of daily) {
                arr.push(item.name);
            };
            this.chartOptions.xaxis.categories = arr;
            
        }
    },
    created: function () {
        this.getData(daily,'Período');
        this.getNames();
    }
})