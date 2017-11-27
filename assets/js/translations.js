window.localization = window.localization || {},
function(n) {
     localization.translate = {

     menu: function() {
         $('#save-changes').text(i18n.__('Save'));
         $('#create-new-file').text(i18n.__('Save as'));
         $('#select-file').text(i18n.__('Open'));
    },

   init: function() {
         this.button();
   }
 };

 n(function() {
     localization.translate.init();
 })

}(jQuery);