# Help me open a pharmacy

## Task

Write code that helps Well open a new pharmacy in Greater Manchester and make loads of money.

```
AS A
    Pharmacist
WHEN I
    Am looking to open a new Pharmacy in Greater Manchester
I WANT
    To know where there are a lot of surgeries
SO THAT
    I can make more money.
```

I'd like to see:

- A historgram of the number of surgeries by Outward Code, e.g.:
  - M12: 3 (7.5%)
  - M21: 10 (25%)
  - M4: 5 (12.5%)
  - M15: 3 (7.5%)
  - M1: 5 (12.5%)
- Additional requirement may be to show the top 5 zones.

The outward code is the first part of the postcode before the space, e.g. if you take `M12 6BN`, `M12` is the outward code.

This is the list of postcodes in the Greater Manchester area:
![gm](./gm.png)

Use any programming language you like. Web/mobile application or console application is fine.

The dataset is in the file `data.json`.

Sample data:

```json
{
  "date": "2019-01-17T09:13:00.016Z",
  "list": [
    {
      "name": "HMP MANCHESTER (HIGH SECURITY)",
      "addressLine1": "SOUTHALL STREET",
      "addressLine2": "",
      "city": "MANCHESTER",
      "postcode": "M60 9AH",
      "phone": "0161 8175600"
    },
    {
      "name": "OLDHAM 7 DAY ACCESS HUB3 OOH",
      "addressLine1": "FAILSWORTH HEALTH CENTRE",
      "addressLine2": "ASHTON RD WEST,FAILSWORTH",
      "city": "MANCHESTER",
      "postcode": "M35 0AD",
      "phone": "0161 6811401"
    },
    {
      "name": "NL COMMUNITY RESPIRATORY SERVICE",
      "addressLine1": "BOC RESPIRATORY SERVICES",
      "addressLine2": "PRIESTLEY ROAD",
      "city": "WORSLEY",
      "postcode": "M28 2UT",
      "phone": "0800 0121858"
    }
  ]
}
```



## Notes


## Execution
Fairly standard node.js / typescript setup, process script takes 2 optional arguments (path to json file and amount of entries to display)


```bash
npm install
npm run process
```
Which should return something along the lines of

```
Assuming data/data.json is the json file and 5 is the amount of histogram entries you want to output
 - Using json file path: data/data.json
 - Number of entries to display: 5
M22 - 16 (5.1%)
M6 - 16 (5.1%)
M40 - 14 (4.4%)
M8 - 14 (4.4%)
M30 - 14 (4.4%)
```

Here's an example with additional arguments

```
 - Using json file path: data/data.json
 - Number of entries to display: 12
M22 - 16 (5.1%)
M6 - 16 (5.1%)
M40 - 14 (4.4%)
M8 - 14 (4.4%)
M30 - 14 (4.4%)
M24 - 13 (4.1%)
M28 - 13 (4.1%)
M9 - 12 (3.8%)
M13 - 11 (3.5%)
M20 - 11 (3.5%)
M16 - 11 (3.5%)
M14 - 10 (3.2%)
```

```bash
npm run test
```
Should display 
```
  JSON File Address Repository
    ✓ Fail gracefull when pointed at non existing file
    ✓ Load addresses and group by outward code


  2 passing (6ms)
```

I have also added test coverage as a runnable script

```bash
npm run coverage
```


Which should output something along the lines of (appended to result of the unit tests as seen above)
```
  JSON File Address Repository
    ✓ Fail gracefull when pointed at non existing file
    ✓ Load addresses and group by outward code


  2 passing (7ms)

----------------------------|---------|----------|---------|---------|-------------------
File                        | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------------------------|---------|----------|---------|---------|-------------------
All files                   |     100 |      100 |     100 |     100 |                   
 src/classes                |     100 |      100 |     100 |     100 |                   
  Group.ts                  |     100 |      100 |     100 |     100 |                   
 src/repositories           |     100 |      100 |     100 |     100 |                   
  JsonAddressRepository.ts  |     100 |      100 |     100 |     100 |                   
 src/repositories/abstracts |     100 |      100 |     100 |     100 |                   
  AddressRepository.ts      |     100 |      100 |     100 |     100 |                   
 src/utilities              |     100 |      100 |     100 |     100 |                   
  GroupsToHistogram.ts      |     100 |      100 |     100 |     100 |                   
 tests                      |     100 |      100 |     100 |     100 |                   
  postcode.test.ts          |     100 |      100 |     100 |     100 |                   
----------------------------|---------|----------|---------|---------|-------------------
```