define(["hydra", "text!templates/calendar.tpl", 'css!../../css/calendar.css'], function(Hydra, tpl){
    var oTpl = _.template(tpl),
        oContainer = document.getElementById('cal');
    Hydra.module.register('calendar', function(bus)
    {
        return {
            events: {
                schedule: {
                    'calendar:click': function()
                    {
                        console.log('Click on calendar');
                    },
                    'event_detail:click': function()
                    {
                        console.log('Click on event detail triggered but showed from calendar');
                    }
                }
            },
            init: function()
            {
                oContainer.innerHTML += oTpl();
                oContainer.addEventListener('click', function()
                {
                    bus.publish('schedule', 'calendar:click', {});
                });
            }
        };
    }).start();
});