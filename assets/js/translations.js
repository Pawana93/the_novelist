window.localization = window.localization || {},
function(n) {
    localization.translate = {

        menu: function() {
            $('#welcome-menu').text(i18n.__('Welcome'));
            $('#editor-menu').text(i18n.__('Editor'));
        },

        welcome: function() {
            $('#welcome .inner h1').text(i18n.__('Welcome Header'));
            $('#welcome .inner p').text(i18n.__('Welcome Text'));
        },

        init: function() {
            this.welcome();
            this.menu();
            this.editorFrame();
        }
    };

n(function() {
    localization.translate.init();
});

}(jQuery);