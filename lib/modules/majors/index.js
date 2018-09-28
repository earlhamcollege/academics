
module.exports = {
  name: 'majors',
  extend: 'apostrophe-pieces',
  label: 'Major/Minor',
  pluralLabel: 'Majors/Minors',
  contextual: true,
  beforeConstruct: function(self, options) {
  options.defaultColumns = [
      {
        name: 'title',
        label: 'Title'
      }
  ].concat(options.defaultColumns  || []);
    options.addFields = [
      {
        name: 'description',
        label: 'Description',
        type: 'string',
        textarea: true
      },

      {
        name: 'minor',
        label: 'Minor',
        type: 'string',
        contextual: true
      },
      {
        name: 'totalCreditHours',
        label: 'Total Credit Hours',
        type: 'integer',
        contextual: true
      },
      {
        type: 'joinByOne',
        name: '_department',
        label: 'Department',
        withType: 'departments',
        filters: {
    // Fetch just enough information
          projection: {
            title: 1
          }
        }
      },
      {
        type: 'joinByArray',
        name: '_courses',
        label: 'Core Classes',
        withType: 'courses',
        filters: {
    // Fetch just enough information
          projection: {
            title: 1,
            slug: 1,
            classNumber: 1,
            creditHours: 1,
            _url: 1,
            slug: 1
          }
        }
      },
      {
        type: 'array',
        name: 'tracks',
        label: 'Tracks',
        titleField: 'Track',
        schema: [
        {
          type: 'string',
          name: 'trackTitle',
          label: 'Track Title'
        },
        {
          type: 'joinByArray',
          name: '_trackCourses',
          label: 'Track Courses',
          withType: 'courses',
          idsField: 'Tracks',
          filters: {
            projection: {
              title: 1,
            }
          }
        }
      ]
      },
      {
        type: 'joinByArray',
        name: '_minorcourses',
        label: 'Minor Classes',
        withType: 'courses',
        filters: {
    // Fetch just enough information
          projection: {
            title: 1,
            classNumber: 1,
          }
        }
      },
    ].concat(options.addFields || []);
    options.arrangeFields = [
    {
      name: 'Major',
      label: 'Course',
      fields: [
        'title',
        'description',
        '_courses',
        'tracks',
        '_minorcourses',
        'slug',
        'tags',
        'published',
        '_department',
        'siteMapPriority'
      ]
    }
  ].concat(options.arrangeFields || []);
  options.removeFields = [
    {
      name: 'totalCreditHours',
    },
    {
      name: 'minor',
    }
].concat(options.removeFields || []);
options.addColumns = [
  {
    name: 'totalCreditHours',
    label: 'Total Credit Hours',
    type: 'integer'
  },
  {
    name: 'minor',
    label: 'Minor',
    type: 'string'
  }
].concat(options.addColumns  || []);

},

construct: function(self, options) {
    self.beforeSave = function(req, piece, options, callback) {
      var totalCreditHours = 0;
      if(piece._courses){
        piece._courses.forEach(function(entry) {
          console.log(entry);
          totalCreditHours = totalCreditHours + entry.creditHours;
        });

        piece.totalCreditHours = totalCreditHours;
      }



      if(piece._minorcourses){
        piece.minor = 'Yes'
      }else {
        piece.minor = 'No'
      }
      return callback();
    };
  }
};
