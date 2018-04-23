describe("Bubble Sort", function() {
  beforeAll(function() {
    spyOn(window, 'swap').and.callThrough();
  })
  let array, array2, array3;
  beforeEach(() => {
    array = [];
    array2 = [5, 4, 2];
    array3 = [4, 5, 2, 8, 7, 6, 1, 3];
  });

  it("has methods `bubbleSorter` ,and `swap`", () => {
    expect(typeof bubbleSort).toBe("function");
    expect(typeof swap).toBe("function");
  });

  it("handles an empty array", function() {
    expect(bubbleSort(array)).toEqual([]);
    expect(swap.calls.count()).toEqual(0);
  });

  it("handles an array with three elements", function() {
    expect(bubbleSort(array2)).toEqual([2, 4, 5]);
    expect(swap.calls.count()).toEqual(3);
  });

  it("handles an array with eight elements", function() {
    expect(bubbleSort(array3)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    expect(swap.calls.count()).toEqual(19);
  });

});
