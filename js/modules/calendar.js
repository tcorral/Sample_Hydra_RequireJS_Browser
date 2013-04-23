define(["hydra", "calendar", 'css!../../css/calendar.css'], function(Hydra, Cal){
    var doc = document,
        Calendar = Cal.calendar,
        Locale_ES = Cal.locale_es;
    Hydra.module.register( 'calendar', function ( bus ) {
        return {
            oCalendar: null,
            startCalendar: function () {
                this.oCalendar = new Calendar();
                this.oCalendar
                    .setContainer( doc.getElementById( "calendarContainer" ) )
                    .setLocale( new Locale_ES() )
                    .setDate( new Date() )
                    .insertIntoDOM();
            },
            setBehavior: function () {
                this.oCalendar.onSelectDate = function () {
                    bus.publish( 'schedule', 'events:byDay', {
                        year: this.nYearSelected,
                        month: this.nMonthSelected,
                        day: this.nDaySelected
                    } );
                };
                this.oCalendar.onChangeMonth = function () {
                    bus.publish( 'schedule', 'events:cleanList', {} );
                    bus.publish( 'schedule', 'events:byMonth', {
                        year: this.nYear,
                        month: this.nMonth,
                        day: this.nDay
                    } );
                };
            },
            init: function () {
                this.startCalendar();
                this.setBehavior();
                this.oCalendar.onChangeMonth();
            }
        };
    }).start();
});