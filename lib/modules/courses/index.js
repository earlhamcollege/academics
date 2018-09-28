
module.exports = {
  name: 'courses',
  extend: 'apostrophe-pieces',
  label: 'Course',
  pluralLabel: 'Courses',
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
        name: 'number',
        label: 'Class Number',
        type: 'string'
      },
      {
        name: 'creditHours',
        label: 'Credit Hours',
        type: 'integer'
      },
      {
        name: 'getag',
        label: 'G.E. Tags',
        type: 'select',
        choices: [
          {
            label: 'Analytical - Abstract Reasoning',
            value: 'A-AR',
          },
          {
            label: 'Analytical - Quantitative',
            value: 'A-QR'
          },
          {
            label: 'Diversity - Domestic',
            value: 'D-D'
          },
          {
            label: 'Diversity - International',
            value: 'D-I'
          },
          {
            label: 'Diversity - Language',
            value: 'D-L'
          },
          {
            label: 'Earlham Seminar',
            value: 'ES'
          }
        ]
      },
      {
        name: 'description',
        type: 'singleton',
        label: 'Description',
        widgetType: 'apostrophe-rich-text',
        options: {
          toolbar: ['Styles', 'Blockquote', 'Bold', 'Italic', 'Link', 'BulletedList'],
          styles: [
              {name: 'Title', element: 'h2'},
            {name: 'Paragraph',element: 'p'}
          ]
        }

      },
      {
        type: 'joinByOne',
        name: '_department',
        label: 'Department',
        withType: 'departments',
        filters: {
    // Fetch just enough information
          projection: {
            title: 1,
          }
        }
      },
      {
        type: 'joinByArray',
        name: '_books',
        label: 'Books',
        withType: 'books',
        filters: {
    // Fetch just enough information
          projection: {
            title: 1,
            isbn: 1,
            awsurl: 1
          }
        }
      },
    ].concat(options.addFields || []);
    options.arrangeFields = [
    {
      name: 'course',
      label: 'Course',
      fields: [
        'title',
        'number',
        'creditHours',
        'description',
        '_department',
        'getag',
        'published',
        'publishedAt',
        'leadtag',
        'tags',
        'headline',
        'teaserText',
        'openGraphImage',
        'slug',
        'siteMapPriority'
      ]
    }
  ].concat(options.arrangeFields || []);
  options.removeFields = [
    {
      name: 'seo',
    }
].concat(options.removeFields || []);
    options.addFilters = [
      {
        name: '_department',

        allowedInChooser: true,
        def: true,
        style: 'pill'
      }
    ].concat(options.addFilters  || []);
    options.addColumns = [
      {
        name: 'creditHours',
        label: 'Credit Hours',
        type: 'integer'
      },
      {
        name: 'number',
        label: 'Class Number',
        type: 'integer'
      }
    ].concat(options.addColumns  || []);

}
};
