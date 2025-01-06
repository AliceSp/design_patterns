import { hasPairWithSum, hasPairWithSumBrut } from './hasPair'

describe('hasPairWithSum', () => {

it('should hasPairWithSumBrut return true', () => {
    expect(hasPairWithSumBrut([1,2,3,4,5], 4)).toEqual(true);
    })

  it('should hasPairWithSum return true', () => {
    expect(hasPairWithSum([1,2,3,4,5], 4)).toEqual(true);
  })

})
