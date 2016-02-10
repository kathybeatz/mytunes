// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  model: SongModel,

  initialize: function(){
    // this.get('enqueue', this.Songdata, this);
  //   this.on("enqueue", function(){
  //     if(this.length === 1){
  //       this.playFirst();
  //     }
  //   }, this);

  // this.on("ended", this.dequeue, this.model) function(song){
  //   if(this.models.length>0){
  //     this.playFirst();
  //   }

  // }, this);

},


  playFirst: function(){
    // this.at(0).play(this);
    
  },


});
console.log(this.model)
//console.log(SongQueue.prototype);