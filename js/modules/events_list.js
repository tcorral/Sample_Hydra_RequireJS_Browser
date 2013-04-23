define(["hydra", "jquery", "dataHelper", "text!../../js/templates/events_list.tpl", 'css!../../css/events_list.css'], function(Hydra, $, dataHelper, tpl){
    var doc = document,
        oTpl = _.template(tpl);
    Hydra.module.register('events_list', function(bus)
    {
        return {
            oList: null,
            events: {
                'schedule': {
                    'events:cleanList': function () {
                        this.oList.innerHTML = '';
                    },
                    'events:byDay': function ( oData ) {
                        var self = this;
                        $.ajax( {
                            url: dataHelper.url.generateDatabaseURL,
                            dataType: 'json',
                            success: function ( oJSON ) {
                                self.fillList( dataHelper.data.getFilteredDataByDay(oJSON, oData.day, oData.month, oData.year) );
                                bus.publish( 'schedule', 'events:cleanDetail', {} );
                            },
                            error: function ( oError ) {
                            }
                        } );
                    },
                    'events:byMonth': function ( oData ) {
                        var self = this;
                        $.ajax( {
                            url: dataHelper.url.generateDatabaseURL,
                            dataType: 'json',
                            success: function ( oJSON ) {
                                self.fillList( dataHelper.data.getFilteredDataByMonth(oJSON, oData.day, oData.month, oData.year) );
                                bus.publish( 'schedule', 'events:cleanDetail', {} );
                            },
                            error: function ( oError ) {
                            }
                        } );
                    }
                }

            },
            fillList: function ( aData ) {
                this.oList.innerHTML = oTpl({events: aData.slice( 0 )});
            },
            setBehavior: function () {
                this.oList.addEventListener( 'click', function ( eEvent ) {
                    var oTarget = eEvent.target;
                    while ( oTarget !== document && oTarget.tagName.toLowerCase() !== 'li' ) {
                        oTarget = oTarget.parentNode;
                    }
                    if ( oTarget === document ) {
                        return false;
                    }
                    bus.publish( 'schedule', 'events:loadDetailInfo', {
                        id: oTarget.id
                    } );
                    return true;
                } );
            },
            init: function () {
                this.oList = doc.getElementById( "events_list" );
                this.setBehavior();
            }
        };
    }).start();
});