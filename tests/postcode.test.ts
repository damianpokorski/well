import { expect } from 'chai';
import { describe, it } from 'mocha';
import JsonAddressRepository from "../src/repositories/JsonAddressRepository";

describe('JSON File Address Repository', function () {
  it('Load addresses', function () {
    const x = (new JsonAddressRepository('data/data.json')).postcodeStartsWith('ME2').get();
    console.log(x);
  });
});
