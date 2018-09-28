module.exports = {
   extend: 'apostrophe-module',
   label: 'Academics',
   moogBundle: {
     modules: ['books','courses','courses-pages', 'departments','departments-pages','divisions','majors','majors-pages','majors-widgets'],
     directory: 'lib/modules'
   },
   construct: function(self, options, callback) {

   }
};
