var Exceptions = function() {
}

Exceptions.prototype = {
    create:function(data){
        var baseOptions = {
            tooltipFormatter:function(sparkline, options, fields){
                var dateStr = moment(fields.x*1000).format("ddd MMM Do")
                return "<span>" + fields.y + '</span>' + ', ' + dateStr
            }
        }
        var sparklineOptions = [
            {
                iaClassName: "python",
                iaHref: "https://papertrailapp.com/searches/89801",
            },
            {                
                iaClassName: "javascript",
                iaHref: "http://errorception.com/projects/51ef3db2db2bef20770003e2/errors",
                iaBorderTop: true                
            },
            {
                iaClassName: "conversion-rate",
                iaDisplayName: "js error %",
                iaYvalues: SparklineSet.conversionRate(data, "javascript", "daily_pageviews"),
                iaUnit: "percent"
            }            
        ]
        var ss = new SparklineSet(data, baseOptions)
        _.each(sparklineOptions, function(options){
            var sparkline = new Sparkline(options)
            ss.addSparkline(sparkline)
        })
        ss.render($(".widget-exceptions"))
    }
}
