// Page specific script
$(document).ready(function () {
    $.ajax({
        url: "/api/chart",
        method: "GET",
        dataType: "json",
        success: function (data) {
            const labels = data.map((item) => item.metric_name);
            const values = data.map((item) => item.value);

            const ctx = $("#hospitalPerformanceIndicatorChart")[0].getContext(
                "2d"
            );
            new Chart(ctx, {
                type: "pie",
                data: {
                    labels: labels,
                    datasets: [
                        {
                            label: "Indicator Values",
                            data: values,
                            backgroundColor: [
                                "#f56954",
                                "#00a65a",
                                "#f39c12",
                                "#00c0ef",
                                "#3c8dbc",
                                "#d2d6de",
                            ],
                        },
                    ],
                },
                options: {
                    maintainAspectRatio: false,
                    responsive: true,
                },
            });
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.error("Error fetching data:", textStatus, errorThrown);
        },
    });
});
