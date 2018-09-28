
module.exports = {
  name: 'books',
  extend: 'apostrophe-pieces',
  label: 'Book',
  pluralLabel: 'Books',
  beforeConstruct: function(self, options) {
    options.addFields = [
      {
        name: 'isbn',
        label: 'ISBN',
        type: 'string'
      },
      {
        name: 'awsurl',
        label: 'Amazon URL',
        type: 'string'
      }
    ].concat(options.addFields || []);
  },
construct: function(self, options) {
    self.beforeUpdate = function(req, piece, options, callback) {
      if(piece.isbn){
        console.log(piece.title);
      }
      return callback();
    };
  }
};
