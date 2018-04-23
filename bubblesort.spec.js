describe("Bubble Sort", function() {
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
  });

  it("handles an array with three elements", function() {
    expect(bubbleSort(array2)).toEqual([2, 4, 5]);
    // expect(array2.swap()).toEqual(2);
  });

  it("handles an array with eight elements", function() {
    expect(bubbleSort(array3)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  // beforeAll(function() {

  // });
  // it("counts the swaps", function() {
  //   spyOn(window, "swap").and.callThrough();
  //   window.bubbleSort(array2);
  //   expect(swap.calls.count().toEqual(2));
  // });

  // it("handles an empty array", function() {
  //   expect(new BubbleSort([]).bubbleSorter()).toEqual([]);
  // });

  // it("handles an array with three elements", function() {
  //   expect(new BubbleSort([4, 5, 2]).bubbleSorter()).toEqual([2, 4, 5]);
  // });

  // it("handles an array with eight elements", function() {
  //   expect(new BubbleSort([4, 5, 2, 8, 7, 6, 1, 3]).bubbleSorter()).toEqual([
  //     1,
  //     2,
  //     3,
  //     4,
  //     5,
  //     6,
  //     7,
  //     8
  //   ]);
  // });
});
