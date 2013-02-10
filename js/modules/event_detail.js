define(["hydra", "text!templates/event_detail.tpl", 'css!../../css/event_detail.css'], function(Hydra, tpl){
    var oTpl = _.template(tpl),
        oContainer = document.getElementById('ev_detail');
    Hydra.module.register('event_detail', function(bus)
    {
        return {
            events: {
                schedule: {
                    'event_detail:click': function()
                    {
                        console.log('Click on event detail');
                    }
                }
            },
            init: function()
            {
                oContainer.innerHTML += oTpl();
                oContainer.addEventListener('click', function()
                {
                    bus.publish('schedule', 'event_detail:click', {});
                });
            }
        };
    }).start();
});