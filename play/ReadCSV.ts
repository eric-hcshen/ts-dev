import * as fs from 'fs';
import { Writable} from 'stream';
let count = 0;
let temp = '';
const output = new Writable({
    write(chunk, encoding, callback) {
        console.log(chunk.toString());
        let str:string[] = chunk.toString().split('\n');
        str.map(x => console.log( '=>' + x));
        console.log(++count);
        //callback();
    }
});
export const getContent = (path:string) => {
    let input = fs.createReadStream(path, {highWaterMark: 1024});//.pipe(process.stdout);
    input.pipe(output);
};