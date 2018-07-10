import { parseItem } from '../src/tap-main'
import * as fse from 'fs-extra'

const inputDir = 'testdata/tests'
const resultDir = 'testdata/expectedResults'
const config = 'test/testdata-config.json'

// async function readConfigs(configuration) {
//   try {
//     const packageObj = await fse.readJson(configuration)
//     return packageObj
//   } catch (err) {
//     console.error(err)
//     return {}
//   }
// }

/*
test('checking parseItem.', async () => {
  let result = await readConfigs(config)

  //expect.assertions(result.length) //says to expect result[0].len tests
  //which is the number of input test files - it should equal the num of expected result files

  // wait for ts-jest 23.x--data-driven tests using "each": https://github.com/sapegin/jest-cheat-sheet/blob/master/Readme.md#data-driven-tests-jest-23
  // instead of for loop on test-config, use fse.readdir to grab files and then test with test.each
  //test.each(filelist)('Tested data input: ' + result[i].testdata + ' with expected output: ' + result[i].expecteddata, async () => {

  for (let i = 0; i < result.length; i++) {
    let testdata = result[i].testdata //iterate through '../tap-ts-starter/testdata/emails'
    let expecteddata = result[i].expectedresult //interate through '../tap-ts-starter/testdata/testoutput'

    console.log('Tested data input: ' + testdata + ' with expected output: ' + expecteddata)

    let data = await fse.readFile(inputDir + '/' + testdata)
    let parsedresult = await parseItem(data)
    let expected = await fse.readJson(resultDir + '/' + expecteddata)
    expected.time_extracted = parsedresult.time_extracted.toISOString()

    await expect(JSON.stringify(parsedresult)).toEqual(JSON.stringify(expected))
    
    
  } //end for loop
})
*/

// let configObj
// let parsedemailArray = []
// let expectedArray = []
// let expected
// let parsedemail
// let index


// let inoutArr = [["dog","dogs"],["a","b"]];

// describe('test', async () => {
//   let inp = 'ishhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh'
//   let out = 'fishhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh'
//   let inputArr = []
//   let a;
//   let b;
//   let outArr = []
//   outArr.push(out)
//   inputArr.push('dog')
//   outArr.push('dogg')

  
//   //inoutArr.push([inp,out]);

//   //console.log(inoutArr[0] + '*')
//   //let index = 0;
//   //inoutArr.push(await fish());
//   //configObj = await readConfigs(config);

//   beforeAll(async () => {
//     // inoutArr.push(['dog', 'dogg'])
//     // let a = await fish()
//     // console.log(a)

//     // inoutArr.push(a)

//     // console.log(inoutArr.length)

//     // inputArr.push(inp)
//   })
//   beforeEach(() =>{
//     inputArr.push(fish());
//     console.log("beforeEach");

//   })

//   test.each(inoutArr)('testing with ', (input, expected) => {
//     console.log('\nLENGTH = ' + inoutArr.length + '\n')
    

//     expect(input).toBe(expected)
//   })
// })
// let parsedemail;
// let expected;

///////////////////////////////////////////////////////////////////////////////////////////////////////
//test.eml////////////with/////////////test.json//////////////////////////////////////////////////////
test('testing parse mime', async () => {

  let testdata = 'test.eml';
  let expectedresult = 'test.json'

  
  console.log('testing ' +testdata+ ' with ' +expectedresult);
  let email = await fse.readFile(inputDir + '/' + testdata) //contains email in form of buffer
  let parsedemail = await parseItem(email) // contains parsed email in form of RECORD json
  let expected = await fse.readJson(resultDir + '/' + expectedresult) //contains expected json
  expected.time_extracted = parsedemail.time_extracted.toISOString()

  parsedemail = JSON.parse(JSON.stringify(parsedemail));
  expected = JSON.parse(JSON.stringify(expected));

  expect(parsedemail).toMatchObject(expected);
});


///////////////////////////////////////////////////////////////////////////////////////////////////////
//testA.eml////////////with/////////////testA.json//////////////////////////////////////////////////////
test('testing parse mime', async () => {

  let testdata = 'testA.eml';
  let expectedresult = 'testA.json'

  
  console.log('testing ' +testdata+ ' with ' +expectedresult);
  let email = await fse.readFile(inputDir + '/' + testdata) //contains email in form of buffer
  let parsedemail = await parseItem(email) // contains parsed email in form of RECORD json
  let expected = await fse.readJson(resultDir + '/' + expectedresult) //contains expected json
  expected.time_extracted = parsedemail.time_extracted.toISOString()

  parsedemail = JSON.parse(JSON.stringify(parsedemail));
  expected = JSON.parse(JSON.stringify(expected));

  expect(parsedemail).toMatchObject(expected);
});


///////////////////////////////////////////////////////////////////////////////////////////////////////
//testB.eml////////////with/////////////testB.json//////////////////////////////////////////////////////
test('testing parse mime', async () => {

  let testdata = 'testB.eml';
  let expectedresult = 'testB.json'

  
  console.log('testing ' +testdata+ ' with ' +expectedresult);
  let email = await fse.readFile(inputDir + '/' + testdata) //contains email in form of buffer
  let parsedemail = await parseItem(email) // contains parsed email in form of RECORD json
  let expected = await fse.readJson(resultDir + '/' + expectedresult) //contains expected json
  expected.time_extracted = parsedemail.time_extracted.toISOString()

  parsedemail = JSON.parse(JSON.stringify(parsedemail));
  expected = JSON.parse(JSON.stringify(expected));

  expect(parsedemail).toMatchObject(expected);
});


///////////////////////////////////////////////////////////////////////////////////////////////////////
//testC.eml////////////with/////////////testC.json//////////////////////////////////////////////////////
test('testing parse mime', async () => {

  let testdata = 'testA.eml';
  let expectedresult = 'testA.json'

  
  console.log('testing ' +testdata+ ' with ' +expectedresult);
  let email = await fse.readFile(inputDir + '/' + testdata) //contains email in form of buffer
  let parsedemail = await parseItem(email) // contains parsed email in form of RECORD json
  let expected = await fse.readJson(resultDir + '/' + expectedresult) //contains expected json
  expected.time_extracted = parsedemail.time_extracted.toISOString()

  parsedemail = JSON.parse(JSON.stringify(parsedemail));
  expected = JSON.parse(JSON.stringify(expected));

  expect(parsedemail).toMatchObject(expected);
});
