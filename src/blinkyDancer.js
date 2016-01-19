var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);

makeBlinkyDancer.prototype.step = function(timeBetweenSteps) {
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this, Math.random()*1000); 
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.

  //this.$node.toggle();

  //Make object move left and right

   this.$node.animate({top:'+=20'}, 500);
   this.$node.animate({top:'-=20'}, 500);


   this.$node.addClass('dancer2');
};

makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.lineUp = function(){
  makeBlinkyDancer.prototype.step = undefined; 
};
