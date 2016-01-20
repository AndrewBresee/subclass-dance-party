describe("movingDancer", function() {

  var move;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    move = new movingDancer(10, 20, timeBetweenSteps); 
  });

  it("should have a jQuery $node object", function() {
    expect(move.$node).to.be.an.instanceof(jQuery);
  });

  it("should be a subclass of makeDancer", function() {
    expect(move).to.be.an.instanceof(makeDancer);
  });

  it("should be a subclass of makeBlinkyDancer", function() {
    expect(move).to.be.an.instanceof(makeBlinkyDancer);
  });

  describe("move", function() {
    it("should call step at least once per second", function() {
      sinon.spy(move, "step");
      expect(move.step.callCount).to.be.equal(0);
      //clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(move.step.callCount).to.be.equal(1);

    });
  });
});