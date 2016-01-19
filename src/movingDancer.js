/*var move = function(){
    window.dancers.forEach(function(dancer){

      var newPosition = makeRandomSpeed();
      console.log(newPosition);
      dancer.$node.animate(newPosition, Math.random()*5000);
    });
    setTimeout(move, 1000);
  };

  move();
});

*/

var movingDancer = function(top, left, timeBetweenSteps){
  makeBlinkyDancer.call(this, top, left, timeBetweenSteps);
};

movingDancer.prototype = Object.create(makeBlinkyDancer.prototype);

movingDancer.prototype.step = function(timeBetweenSteps){
  makeBlinkyDancer.prototype.step.call(this, 0);

  if(window.move){
    this.$node.removeClass('explode');
    var makeRandomSpeed = function(){
      var randomHeight = $(window)[0].innerHeight*Math.random();
      var randomLeft = $(window)[0].innerWidth*Math.random(); 

      var positionObject = {
        top: randomHeight,
        left: randomLeft
      };

      return positionObject;
    };

    var newPosition = makeRandomSpeed();
    
    this.$node.animate(newPosition, Math.random()*5000);
  }else{
    this.$node.addClass('explode');
  }

};

movingDancer.prototype.constructor = movingDancer;


