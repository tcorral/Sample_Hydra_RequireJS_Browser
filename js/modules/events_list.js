define(["hydra", "text!templates/events_list.tpl", 'css!../../css/events_list.css'], function(Hydra, tpl){
    var oTpl = _.template(tpl),
        oContainer = document.getElementById('ev_list');
    Hydra.module.register('events_list', function(bus)
    {
        return {
            events: {
                schedule: {
                    'events_list:click': function()
                    {
                        console.log('Click on events list');
                    }
                }
            },
            init: function()
            {
                oContainer.innerHTML += oTpl();
                oContainer.addEventListener('click', function()
                {
                    bus.publish('schedule', 'events_list:click', {});
                });
            }
        };
    }).start();
});