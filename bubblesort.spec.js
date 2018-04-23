describe('Bubble Sort', function(){

  beforeAll(function() {
    spyOn(BubbleSort, 'BubbleSort.swap').and.callThrough();
  });
  it('counts the swaps', function() {
    BubbleSort.bubbleSorter();
    expect( new BubbleSort([4,5,2]).bubbleSorter()).calls.count().toEqual(2);
  });


  it('handles an empty array', function(){
    expect( new BubbleSort([]).bubbleSorter()).toEqual( [] );
  });

  it('handles an array with three elements', function(){
    expect( new BubbleSort([4,5,2]).bubbleSorter() ).toEqual( [2,4,5] );
  });

  it('handles an array with eight elements', function(){
    expect( new BubbleSort([4,5,2,8,7,6,1,3]).bubbleSorter() ).toEqual( [1,2,3,4,5,6,7,8] );
  });

});
