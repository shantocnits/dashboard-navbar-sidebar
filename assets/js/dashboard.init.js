function getChartColorsArray(e) {
    if (null !== document.getElementById(e)) {
        var r = document.getElementById(e).getAttribute("data-colors");
        return (r = JSON.parse(r)).map(function (e) {
            var r = e.replace(" ", "");
            if (-1 == r.indexOf("--")) return r;
            var t = getComputedStyle(document.documentElement).getPropertyValue(r);
            return t || void 0;
        });
    }
}
var barchartColors = getChartColorsArray("sales-over"),
    options1 = {
        chart: { type: "area", height: 350, toolbar: { show: !1 } },
        series: [
            { name: "Expenses", data: [0, 70, 40, 75, 35, 75] },
            { name: "Income", data: [0, 35, 15, 30, 15, 30] },
        ],
        stroke: { curve: "straight", width: ["3", "2"], dashArray: [0, 5] },
        colors: barchartColors,
        xaxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"] },
        legend: { show: !1 },
        fill: { type: "gradient", gradient: { shadeIntensity: 1, inverseColors: !1, opacityFrom: 0.3, opacityTo: 0.01, stops: [30, 100, 100, 100] } },
        dataLabels: { enabled: !1 },
        tooltip: {
            fixed: { enabled: !1 },
            x: { show: !1 },
            y: {
                title: {
                    formatter: function (e) {
                        return "";
                    },
                },
            },
            marker: { show: !1 },
        },
    };
new ApexCharts(document.querySelector("#sales-over"), options1).render(), flatpickr("#datepicker-basic"), flatpickr("#sales-over-time", { defaultDate: new Date(), dateFormat: "d M, Y" });
var options = {
        series: [{ name: "Series A", data: [12, 18, 12, 15, 18, 13, 15] }],
        chart: { type: "bar", height: 237, stacked: !0, toolbar: { show: !1 }, yaxis: { show: !1 }, zoom: { enabled: !0 } },
        grid: { show: !1 },
        dataLabels: {
            enabled: !0,
            formatter: function (e) {
                return e + "%";
            },
            offsetY: -30,
            style: { fontSize: "12px", colors: ["#9b9b9d"] },
        },
        plotOptions: { bar: { horizontal: !1, columnWidth: "20%", borderRadius: 4, endingShape: "rounded", dataLabels: { position: "top" } } },
        xaxis: { categories: ["M", "T", "W", "T", "F", "S", "S"], stroke: 5 },
        yaxis: { show: !1 },
        colors: (barchartColors = getChartColorsArray("weekly-chart")),
        fill: { opacity: 1 },
    },
    chart = new ApexCharts(document.querySelector("#weekly-chart"), options);
chart.render();
var worldemapmarkers = new jsVectorMap({
        map: "world_merc",
        selector: "#world-map-markers",
        zoomOnScroll: !1,
        zoomButtons: !1,
        selectedMarkers: [0, 2],
        markersSelectable: !0,
        regionStyle: { initial: { fill: "#d9d9f0" } },
        markers: [
            { name: "United States", coords: [31.9474, 35.2272] },
            { name: "Italy", coords: [61.524, 105.3188] },
            { name: "French", coords: [56.1304, -106.3468] },
            { name: "Spain", coords: [71.7069, -42.6043] },
        ],
        markerStyle: { initial: { fill: "#5052ba" }, selected: { fill: "#5052ba" } },
        labels: {
            markers: {
                render: function (e) {
                    return e.name;
                },
            },
        },
    }),
    options = {
        series: [75],
        chart: { height: 180, type: "radialBar", toolbar: { show: !1 } },
        plotOptions: {
            radialBar: {
                startAngle: -135,
                endAngle: 225,
                hollow: { margin: 0, size: "77%", background: "transparent", image: void 0, imageOffsetX: 0, imageOffsetY: 0, position: "front", dropShadow: { enabled: !1 } },
                track: { background: "#dee2e8", strokeWidth: "100%", margin: 0 },
                dataLabels: {
                    show: !0,
                    name: { show: !1 },
                    value: {
                        formatter: function (e) {
                            return parseInt(e);
                        },
                        color: "#1a1823",
                        fontSize: "26px",
                        fontWeight: 700,
                        show: !0,
                    },
                },
            },
        },
        colors: (barchartColors = getChartColorsArray("order-chart")),
        stroke: { lineCap: "round" },
        labels: ["Order"],
    };
(chart = new ApexCharts(document.querySelector("#earnings-chart"), options)).render();
options = {
    series: [40],
    chart: { height: 180, type: "radialBar", toolbar: { show: !1 } },
    plotOptions: {
        radialBar: {
            startAngle: -135,
            endAngle: 225,
            hollow: { margin: 0, size: "77%", background: "transparent", image: void 0, imageOffsetX: 0, imageOffsetY: 0, position: "front", dropShadow: { enabled: !1 } },
            track: { background: "#dee2e8", strokeWidth: "100%", margin: 0 },
            dataLabels: {
                show: !0,
                name: { offsetY: -10, show: !0, color: "#9b9b9d", fontWeight: 300, fontSize: "17px" },
                value: {
                    formatter: function (e) {
                        return parseInt(e);
                    },
                    fontSize: "26px",
                    show: !0,
                    fontWeight: 700,
                },
            },
        },
    },
    colors: (barchartColors = getChartColorsArray("order-chart")),
    stroke: { lineCap: "round" },
    labels: ["Order"],
};
(chart = new ApexCharts(document.querySelector("#order-chart"), options)).render();
options = {
    series: [
        {
            name: "Profit",
            type: "bar",
            data: [
                { x: "1", y: 51 },
                { x: "2", y: 52 },
                { x: "3", y: 50 },
                { x: "4", y: 40 },
                { x: "5", y: 30 },
                { x: "6", y: 50 },
                { x: "7", y: 52 },
                { x: "8", y: 40 },
                { x: "9", y: 52 },
                { x: "10", y: 45 },
                { x: "11", y: 50 },
                { x: "12", y: 52 },
                { x: "13", y: 40 },
            ],
        },
        {
            name: "Loss",
            type: "bar",
            data: [
                { x: "13", y: -35 },
                { x: "12", y: -50 },
                { x: "11", y: -46 },
                { x: "10", y: -50 },
                { x: "9", y: -45 },
                { x: "8", y: -30 },
                { x: "7", y: -35 },
                { x: "6", y: -50 },
                { x: "5", y: -46 },
                { x: "4", y: -52 },
                { x: "3", y: -53 },
                { x: "2", y: -52 },
                { x: "1", y: -50 },
            ],
        },
    ],
    chart: { height: 185, type: "bar", toolbar: { show: !1 } },
    plotOptions: { bar: { columnWidth: "70%" } },
    colors: (barchartColors = getChartColorsArray("overview")),
    legend: { show: !0 },
    dataLabels: { enabled: !1 },
};
(chart = new ApexCharts(document.querySelector("#overview"), options)).render();
