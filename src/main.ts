import JsonAddressRepository from './repositories/JsonAddressRepository';
import GroupHistogramEntry from './utilities/GroupsToHistogram';

var filepath = 'data/data.json';
var entriesToDisplay = 5;

if(process.argv.length == 2) {
  console.log('Additional arguments provided, if you wish to do that, use the following syntax');
  console.log('npm run process -- data/data.json 5');
  console.log('Assuming data/data.json is the json file and 5 is the amount of histogram entries you want to output');
}

if(process.argv.length == 3) {
  filepath = process.argv[2];
}

if(process.argv.length == 4) {
  entriesToDisplay = parseInt(process.argv[3]);
}

console.log(` - Using json file path: ${filepath}`);
console.log(` - Number of entries to display: ${entriesToDisplay}`);

const groups = (new JsonAddressRepository(filepath))
  .filterManchesterOutwardCodes()
  .groupByOutwardCode();

const x = GroupHistogramEntry
  .fromGroupArray(groups)
  .slice(0, entriesToDisplay)
  .map(entry => entry.toString())
  .map(entry => console.log(entry));