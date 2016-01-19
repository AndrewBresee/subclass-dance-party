    var move = function(){
      window.dancers.forEach(function(dancer){

        var newPosition = makeRandomSpeed();
        console.log(newPosition);
        dancer.$node.animate(newPosition, Math.random()*5000);
      });
      setTimeout(move, 1000);
    };

    move();
  });