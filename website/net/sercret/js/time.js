(function($) {
    // var timestamp2 = "2021/04/12 10:00:00";
    // console.log(timestamp2)
    $.fn.downCount = function(options, callback) {
        var settings = $.extend({
            date: null,
            offset: null
        }, options);
        // Throw error if date is not set
        if (!settings.date) {
            $.error('Date is not defined.');
        }
        // Throw error if date is set incorectly
        if (!Date.parse(settings.date)) {
            $.error('Incorrect date format, it should look like this, 12/24/2012 12:00:00.');
        }

        // Save container
        var container = this;
        var currentDate = function() {
            // timestamp2 = (new Date()).getTime() + 1000;
            var new_date = new Date()

            return new_date;
        };


        function countdown() {
            var target_date = new Date(settings.date); // set target date
            current_date = currentDate(); // get fixed current date

            var difference = target_date - current_date;

            // if difference is negative than it's pass the target date
            if (difference < 0) {
                // stop timer
                clearInterval(interval);
                if (callback && typeof callback === 'function') callback();
                return;
            }
            // basic math variables
            var _second = 1000,
                _minute = _second * 60,
                _hour = _minute * 60,
                _day = _hour * 24;
            // calculate dates
            var days = Math.floor(difference / _day),
                hours = Math.floor((difference % _day) / _hour),
                minutes = Math.floor((difference % _hour) / _minute),
                seconds = Math.floor((difference % _minute) / _second);

            // fix dates so that it will show two digets
            days = (String(days).length >= 2) ? days : '0' + days;
            hours = (String(hours).length >= 2) ? hours : '0' + hours;
            minutes = (String(minutes).length >= 2) ? minutes : '0' + minutes;
            seconds = (String(seconds).length >= 2) ? seconds : '0' + seconds;

            // based on the date change the refrence wording
            var ref_days = (days === 1) ? 'day' : 'days',
                ref_hours = (hours === 1) ? 'hour' : 'hours',
                ref_minutes = (minutes === 1) ? 'minute' : 'minutes',
                ref_seconds = (seconds === 1) ? 'second' : 'seconds';

            var daysStr = days.toString(),
                hoursStr = (parseInt(hours) + parseInt(daysStr) * 24).toString(),
                minutesStr = minutes.toString(),
                secondsStr = seconds.toString();
                console.log(hours,daysStr)
            container.find('.days').html('<span class="n' + daysStr[0] + '"></span><span class="n' + daysStr[1] + '"></span>');
            container.find('.hours').html('<span class="hours_h n' + hoursStr[0] + '">' + hoursStr[0] + '</span><span class="hours_m n' + hoursStr[1] + '">' + hoursStr[1] + '</span><span class="hours_s n' + hoursStr[2] + '">' + hoursStr[2] + '</span>');
            container.find('.minutes').html('<span class="minutes_m n' + minutesStr[0] + '">' + minutesStr[0] + '</span><span class="minutes_s n' + minutesStr[1] + '">' + minutesStr[1] + '</span>');
            container.find('.seconds').html('<span class="seconds_m n' + secondsStr[0] + '">' + secondsStr[0] + '</span><span class="seconds_s n' + secondsStr[1] + '">' + secondsStr[1] + '</span>');

            container.find('.days_ref').text(ref_days);
            container.find('.hours_ref').text(ref_hours);
            container.find('.minutes_ref').text(ref_minutes);
            container.find('.seconds_ref').text(ref_seconds);
        };
        // start
        var interval = setInterval(countdown, 1000);
    };

    $(".time").downCount({
        date: "2023/2/20 10:00:00",
        offset: +8
    }, function() {
        $('.days').html('<span class="n0"></span><span class="n0"></span>');
        $('.hours').html('<span class="n0"></span><span class="n0"></span>');
        $('.minutes').html('<span class="n0"></span><span class="n0"></span>');
        $('.seconds').html('<span class="n0"></span><span class="n0"></span>');
    });

})(jQuery);