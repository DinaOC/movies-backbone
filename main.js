var templates = {};
templates.movies = [
"<article data-id='<%= movies.id %>'>",
"<img src='<%= movies.image %>'>",
"<h2><%= movies.title %></h2>",
"<p><%= movies.genre %></p>",
"<p class = 'descript'><%= movies.desc %></p>",
"<p class = 'ratings'><%= movies.ratings %></p>",
"<button class='delete'>Delete</button>",
"</article>"
].join('');


$(document).ready(function(){
page.init();

});
var moviesCollection = new MoviesCollection(movies)
var page = {
  init: function () {
    page.addAll();
    page.initEvents();
  },
  moviesTmpl: _.template(templates.movies),
  initEvents: function(){
$('.main').on('click', '.delete', function (event){
  event.preventDefault();
  var movieId = $(this).closest('article').data('id');
  moviesCollection.remove(movieId);
  page.addAll();
});
$('.add-new').on('click',function(event){
  event.preventDefault();
  var newMovie = {
    title: $('input[name="title"]').val(),
    genre: $('input[name="genre"]').val(),
    image: $('input[name="image"]').val(),
    desc: $('textarea[name="desc"]').val(),

  };
  var myMovie = new MoviesModel(newMovie);
moviesCollection.add(myMovie);
page.addAll();


});


  },

 addOne: function(el) {
el.attributes.id = el.cid;
var markup = page.moviesTmpl({movies: el.toJSON()});
$('.main').append(markup);
  },
addAll: function () {
  $('.main').html('');
  _.each(moviesCollection.models, page.addOne);
},

}
