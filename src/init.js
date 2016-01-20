$(document).ready(function() {
  window.dancers = [];
  window.move = true;

  $(".addDancerButton").on("click", function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];


    // get the maker function for the kind of dancer we're supposed to make

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      0
    );

    window.dancers.push(dancer);
    $('body').append(dancer.$node);

    $('.dancer').on('click', function(event){
      $(this).addClass('explode');
      $(this).fadeOut(100, function(){
        $(this).remove();
      });
    });

  });

  $('.lineUp').on('click', function(event){

    window.move = false;
    var targetHeight = $("body").height() * 0.62;
    var bodyWidth = $("body").width();

    window.dancers.forEach(function(dancer){
      dancer.$node.animate({
        top: $("body").height() * 0.62,
      }, "slow");
    });  
  });

  

  var makeRandomSpeed = function(){
    var randomHeight = $(window)[0].innerHeight*Math.random();
    var randomLeft = $(window)[0].innerWidth*Math.random(); 

    var positionObject = {
      top: randomHeight,
      left: randomLeft
    };

    return positionObject;
  };

  $(".addMover").on("click", function(event){
    var dancerMoverFunction = $(this).data("dancer-mover-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMover = window[dancerMoverFunction];

    var movingDancer = new dancerMover(
      $(window)[0].innerHeight*Math.random(),
      $(window)[0].innerWidth*Math.random(), 
      0);
     
    window.dancers.push(movingDancer);
    
    $('body').append(movingDancer.$node); 

    $('.dancer2').on('click', function(event){

      $(this).fadeOut("fast");
      $(this).addClass('explode');
      $(this).fadeOut(100, function(){
        $(this).remove();
      });
    });


    window.setInterval(function(){
      var dancers = $('img');
      dancers.each(function(index, img){
        var top = parseInt(img.style.top);
        var left = parseInt(img.style.left);


        var icebergTop = parseInt($('.iceberg')[1].style.top);
        var icebergLeft = parseInt($('.iceberg')[1].style.left);

        console.log("icebergTop :", icebergTop);
        console.log("icebergLeft :", icebergLeft);
        //console.log("iceberg top:", icebergTop);

        if(Math.abs(top - icebergTop) <= 5 && Math.abs(left - icebergLeft) <= 5){
          $(this).addClass('explode'); 
          $(this).hide(1200);
        }
      });

    }, 100);


  });

  $(".iceberg").on("click", function(event){
    
    //$('.iceberg').remove();    
    var icebergDancer = $(this).data("iceberg-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var icebergFunction = window[icebergDancer];

    var iceberg = new makeIcebergDancer(
      $(window)[0].innerHeight*Math.random(),
      $(window)[0].innerWidth*Math.random(), 
      0);
     
    window.dancers.push(iceberg);
    
    $('body').append(iceberg.$node);      
  });

  if(window.iceberged){
    console.log(window.iceberged);
    
  }

  $('.scatter').on('click', function(event){
    window.move = true;
  });

  //cb should be checking all of the window.dancers dancers 
  //and their top & left location
    //if their top and left is within 10px of iceberg
      //explode it
  



});