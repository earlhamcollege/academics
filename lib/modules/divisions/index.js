
module.exports = {
  name: 'divisions',
  extend: 'apostrophe-pieces',
  label: 'Division',
  pluralLabel: 'Divisions',
  construct: function(self, options) {
      self.beforeUpdate = function(req, piece, options, callback) {
        if(piece.title != piece.title){
          console.log(piece.title);
        }
        return callback();
      };
    }
};
