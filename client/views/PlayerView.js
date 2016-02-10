// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  initialize: function(){
    //listen for click to add song from library to queue
    //song added to queue shows up in player view
    //listen for the song to end
    this.on("ended")
    //once song ends, then dequeue the song
    //the dequeued song goes back to the library
    //then the next song in the queue is played
 
 


    // this.render();
    // this.set('currentSong', new SongModel());
    // this.set('songQueue', new SongQueue());
    //this.model.dequeue();
  },


  setSong: function(song){
    this.model = song;
    this.render();
  },

  render: function(){
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
