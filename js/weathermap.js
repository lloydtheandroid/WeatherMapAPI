jQuery(document).ready(function ($) {
    $.ajax({
        type: "GET",
        dataType: "jsonp",
        jsonp: "callback", jsonpCallback: "callback",
        url: "http://dataservice.accuweather.com/forecasts/v1/daily/5day/351198.json?apikey=4zEGGRGSEecaQZl4K1To6RhV1B9Hm9Wt",
        cache: false
    }).always(function (response) {
    }).fail(function (error) {
    }).done(function (response) {
        $("#dailyforecast").html("");
        response.DailyForecasts.forEach(function (element, i){
            var icon = element.Day.Icon;
            var dayOfWeek = new Date(element.Date);
            var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
            var weekday = dayOfWeek.getDay();
            var maxTemp = element.Temperature.Maximum.Value + "°" + element.Temperature.Maximum.Unit;
            var minTemp = element.Temperature.Minimum.Value + "°" + element.Temperature.Minimum.Unit;
            $("#dailyforecast").append("<div class='panel-body col-xs-2'>" +
                "<div>" + "<p class='text-center'><small>" + days[weekday] + "</small></p>" + "</div>" +
                "<img src='iconsWthr/" + icon + ".png'>" +
                "<div>" + "<p class='text-center'><small>" + element.Day.IconPhrase + "</small></p>" + "</div>" +
                "<div>" + "High - " + maxTemp + "</div>" +
                "<div>" + "Low - " + minTemp + "</div>" +
                "</div>"
            );
        });
        $("#headline").html("");
        $(response).each(function (i, element) {
            $("#headline").append("<div id='footer'>" + element.Headline.Text + "</div>")
        })
    })
});