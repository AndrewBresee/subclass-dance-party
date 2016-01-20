var makeIcebergDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('iceberg');
};

makeIcebergDancer.prototype = Object.create(makeDancer.prototype);

makeIcebergDancer.prototype.step = function(timeBetweenSteps) {
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this, Math.random()*1000); 
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.

  //this.$node.toggle();

  //Make object move left and right

   this.$node.animate({top:'+=20'}, 1000);
   this.$node.animate({top:'-=20'}, 1000);
};

makeIcebergDancer.prototype.constructor = makeIcebergDancer;

makeIcebergDancer.prototype.lineUp = function(){
  makeIcebergDancer.prototype.step = undefined; 
};
