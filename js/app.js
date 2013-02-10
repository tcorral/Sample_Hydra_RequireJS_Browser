require.config({
    baseUrl: "/js/",
    paths:{
        hydra:'libs/hydra',
        underscore: 'libs/underscore',
        text: "libs/text",
        css: "libs/css"
    },
    shim: {
        underscore: {
            exports: "_"
        },
        hydra: {
            deps: ['underscore'],
            exports: 'Hydra'
        }
    }
});
define(['modules/calendar', 'modules/events_list', 'modules/event_detail']);