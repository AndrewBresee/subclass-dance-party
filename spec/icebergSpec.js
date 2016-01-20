describe("iceberg", function() {

  var ice;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    ice = new makeIcebergDancer(10, 20, timeBetweenSteps); 
  });

  it("should have a jQuery $node object", function() {
    expect(ice.$node).to.be.an.instanceof(jQuery);
  });

  it("should be a subclass of makeDancer", function() {
    expect(ice).to.be.an.instanceof(makeDancer);
  });

  it("should not be a subclass of movingDancer", function() {
    expect(ice).to.not.be.an.instanceof(movingDancer);
  });


  describe("ice", function() {
    it("should call step at least once per second", function() {
      sinon.spy(ice, "step");
      expect(ice.step.callCount).to.be.equal(0);
      //clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(ice.step.callCount).to.be.equal(1);

    });
  });
});