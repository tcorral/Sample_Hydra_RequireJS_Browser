define(["hydra", "jquery", "dataHelper", "text!../../js/templates/event_detail.tpl", 'css!../../css/event_detail.css'], function(Hydra, $, dataHelper, tpl){
    var doc = document,
        oTpl = _.template(tpl);
    Hydra.module.register('event_detail', function(bus)
    {
        return {
            oDetail: null,
            events: {
                'schedule': {
                    'events:loadDetailInfo': function ( oData ) {
                        var self = this;
                        $.ajax( {
                            url: dataHelper.url.generateDatabaseURL,
                            dataType: 'json',
                            success: function ( oJSON ) {
                                self.createDetail( dataHelper.data.getFilteredDataById( oJSON, parseInt( oData.id, 10 ) ) );
                            },
                            error: function ( oError ) {
                            }
                        } );
                    },
                    'events:cleanDetail': function ( oData ) {
                        this.oDetail.innerHTML = '';
                    }
                }
            },
            createDetail: function ( oData ) {
                this.oDetail.innerHTML = oTpl({event: oData});
            },
            init: function () {
                this.oDetail = doc.getElementById( "detail" );
            },
            onDestroy: function() {
                bus.unsubscribe('schedule', this);
            }
        };
    }).start();
});