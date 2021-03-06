// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({
  //url: //Users/student/Desktop/MyTunes/test/example/url,

  play: function(){
    // Triggering an event on an instance of a SongModel will also trigger that event on all collections that SongModel instance belongs to.
    // Why do we need to pass along the keyword this when we trigger the 'play' event?
    this.trigger('play', this);
  },

  enqueue: function(){
    this.trigger('enqueue', this);
  },

  dequeue: function(){
    this.trigger('dequeue', this);
  },

  ended:  function(){
    this.trigger('ended', this);
  }

});
console.log(SongModel)