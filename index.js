module.exports = {
	label: 'Academics',
   alias: 'ec-academics',
   name: 'ec-academics',
   extend: 'apostrophe-module',   
	moogBundle: {
		modules: ['academic-page-templates','books','courses','courses-pages', 'departments','departments-pages','divisions','majors','majors-pages','majors-widgets'],
		directory: 'lib/modules'
	}
};
