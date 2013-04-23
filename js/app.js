require.config({
    baseUrl: "/js/",
    paths:{
        hydra:'libs/hydra',
        underscore: 'libs/underscore',
        text: "libs/text",
        css: "libs/css",
        calendar: 'widget/Calendar',
        jquery: 'libs/jquery-1.8.2',
        dataHelper: 'dataHelper'
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
define(['modules/events_list', 'modules/event_detail', 'modules/calendar']);