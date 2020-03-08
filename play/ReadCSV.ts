import * as fs from 'fs';
import { Writable} from 'stream';
import {RedisRepro} from './RedisRepro'
let rowCount = 0;
let temp = '';
let repro = new RedisRepro();
const output = new Writable({
    write(chunk, encoding, callback) {
        //console.log(chunk.toString());
        //console.log('~~~~~~~~~~`');
        let strBuf = temp.concat(chunk.toString());
        let str:string[] = strBuf.split('\n');
        if (rowCount == 0) {
            str.splice(0,1); //remove header
        }
        temp = str.pop(); // store partial line
        //str.map(x => console.log(  ++rowCount + '=> ' + x));
        for (let line of str) {
            let cols = line.split(',');
            let rowIndex = ++rowCount;
            console.log(cols[5] + ':' + rowIndex);
            //repro.setColbyRow(cols[5], ++rowCount);
        }
        callback();
    }
});
export const getContent = (path:string) => {
    let input = fs.createReadStream(path, {highWaterMark: 1024*10});//.pipe(process.stdout);
    input.pipe(output);
};