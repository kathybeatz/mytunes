// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.get('enqueue', this.Songdata, this);
  //   this.on("enqueue", function(){
  //     if(this.length === 1){
  //       this.playFirst();
  //     }
  //   }, this);
  },
  // this.on("ended", this.dequeue, this);


  playFirst: function(){
    // this.at(0).play(this);
    
  },





});

//console.log(SongQueue.prototype);