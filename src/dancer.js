// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {

  
  // use jQuery to create an HTML <span> tag
  this.$node = $('<img class="dancer"></img>');

  makeDancer.prototype.step.call(this, timeBetweenSteps);

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  makeDancer.prototype.setPosition.call(this, top, left);  
};

makeDancer.prototype.step = function(timeBetweenSteps) {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  var context = this;

  setTimeout(function(){
    context.step(timeBetweenSteps);
  }, timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  this.styleSettings = {
    top: top,
    left: left
  };

  this.$node.css(this.styleSettings);
  //this.$node.css('background-image',url('http://fla.fg-a.com/boats/sail-boat-animated-1.gif'));
};