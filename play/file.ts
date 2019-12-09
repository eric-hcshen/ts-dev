import * as fs from 'fs';
import * as util from 'util';

function writeFile(input:string) {
    fs.writeFile('./newFile.txt', input, (error) => {
        if (error) {
            console.log(error);
        }else {
            console.log('File Created Sucessfully');
        }
    });
}

const writeFilePromise = util.promisify(fs.writeFile);
const readFilePromise = util.promisify(fs.readFile);

function writeFileV1(input:string){
    return writeFilePromise('./newFileV1.txt', input);
}
function readFileV1(input:string) {
    return readFilePromise('./newFileV1.txt', {encoding: 'utf8'});
}

module.exports = {writeFile, writeFileV1, readFileV1};