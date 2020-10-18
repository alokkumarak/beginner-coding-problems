import { BubbleSort } from './BubbleSort';

describe("BubbleSort", () => {
  it("it should return sorted array", () => {
    
    const array: string[] = [1,9,4,3,7,0];
    const result = BubbleSort(array);


    expect(result);
  });
});
