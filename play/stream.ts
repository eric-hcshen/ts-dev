import {Readable} from 'stream';

export function readableTest() {
    const stream = new Readable();
    stream.push('Hello');
    stream.push('World');
    stream.push(null);
    
    stream.on('data', (chunk) => {
        console.log(chunk.toString());
    })
    stream.on('end', () => {
        console.log('read completed')
    })
}

//module.exports ={readableTest};