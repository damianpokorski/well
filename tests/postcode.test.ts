import { expect } from 'chai';
import { describe, it } from 'mocha';
import JsonAddressRepository from "../src/repositories/JsonAddressRepository";
import { assert } from 'console';
import GroupHistogramEntry from '../src/utilities/GroupsToHistogram';




describe('JSON File Address Repository', function () {
  it('Fail gracefull when pointed at non existing file', function () {
    const addresses = (new JsonAddressRepository('invalid-file-path'));
    expect(addresses.get().length).to.eq(0);
  });
  
  it('Load addresses and group by outward code', function () {
    const addresses = (new JsonAddressRepository('data/data.json'));
    const groups = addresses
      .filterManchesterOutwardCodes()
      .groupByOutwardCode();
    const histogram = GroupHistogramEntry.fromGroupArray(groups).slice(0, 5);
    
    expect(histogram.length).to.eq(5);
    expect(histogram[4].key).to.eq('M30');
    expect(histogram[4].toString()).to.eq('M30 - 14 (4.4%)');
  });
});