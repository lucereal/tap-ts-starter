import { parseItem } from '../src/tap-main'
import * as fse from 'fs-extra'
import each from 'jest-each'
import { parse } from 'path'

const inputDir = 'testdata/tests'
const resultDir = 'testdata/expectedResults'
const config = 'test/testdata-config.json'

async function readConfigs(configuration) {
  try {
    const packageObj = await fse.readJson(configuration)
    return packageObj
  } catch (err) {
    console.error(err)
    return {}
  }
}

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

let configObj
let parsedemailArray = []
let expectedArray = []
let expected
let parsedemail
let index

async function fish() {
  console.log('here')
  configObj = await readConfigs(config)

  let email = await fse.readFile(inputDir + '/' + configObj[0].testdata) //contains email in form of buffer
  parsedemail = await parseItem(email) // contains parsed email in form of RECORD json
  expected = await fse.readJson(resultDir + '/' + configObj[0].expectedresult) //contains expected json

  parsedemail = JSON.stringify(parsedemail)
  expected = JSON.stringify(expected)
  console.log('***************')
  //return [parsedemail,expected];
  return ['A', 'B']
}
//fish();

describe('test', async () => {
  let inp = 'ishhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh'
  let out = 'fishhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh'
  let inputArr = []

  let outArr = []
  outArr.push(out)
  inputArr.push('dog')
  outArr.push('dogg')

  let inoutArr = []
  //inoutArr.push([inp,out]);

  console.log(inoutArr[0] + '*')

  //inoutArr.push(await fish());
  //configObj = await readConfigs(config);

  beforeAll(async () => {
    inoutArr.push(['dog', 'dogg'])
    let a = await fish()
    console.log(a)

    inoutArr.push(a)

    console.log(inoutArr.length)

    inputArr.push(inp)
  })

  test.each(inoutArr)('testing with ', (input, expected) => {
    console.log(inoutArr.length)
    console.log(inoutArr[2])

    expect(input).toBe(expected)
  })
})
