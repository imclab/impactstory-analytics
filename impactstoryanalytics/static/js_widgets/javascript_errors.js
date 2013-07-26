var Javascript_errors = function() {
}

Javascript_errors.prototype = {
    create:function(data){
        var baseOptions = {
            tooltipFormatter:function(sparkline, options, fields){
                var dateStr = moment(fields.x*1000).format("ddd h:mm a")
                return "<span>" + fields.y + '</span>' + ', ' + dateStr
            }
        }
        var sparklineOptions = [
            {
                iaClassName: "Jason",
                iaShareYAxis: true
            },
            {
                iaClassName:"Heather",
                iaShareYAxis: true
            }
        ]
        var ss = new SparklineSet(data, baseOptions)
        _.each(sparklineOptions, function(options){
            var sparkline = new Sparkline(options)
            ss.addSparkline(sparkline)
        })
        ss.render($(".widget-javascript_errors"))
    }
}
