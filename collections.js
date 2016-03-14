var MoviesCollection = Backbone.Collection.extend({
  model: MoviesModel,
  initialize: function (options){
    console.log("This is Collection", options)
  }
});
