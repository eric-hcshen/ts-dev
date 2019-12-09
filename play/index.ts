const {writeFile, writeFileV1, readFileV1} = require('./file'); // for nodejs style
const {eventEmitter} = require('./event');
const {readableTest} = require('./stream');
import {Http, Options} from './http';

writeFile(process.argv[2]);
writeFileV1(process.argv[2])
        .then(() => {console.log('File Create Sucessfully! ' + 10 );})
        .catch((error) => {console.log(error);});
writeFileV1(process.argv[2])
        .then(() => {console.log('File Create Sucessfully! ' + 11);})
        .catch((error) => {console.log(error);});
async function run() {
    for (var i =0 ; i< 10; i++) {
        await writeFileV1(process.argv[2])
        .then(() => {console.log('File Create Sucessfully! ' + i );})
        .catch((error) => {console.log(error);});
        await readFileV1(process.argv[2])
        .then((data) => {console.log(data);})
        .catch((error) => {console.log(error);});
    }
}

run();
eventEmitter.emit('Event');
eventEmitter.emit('Event');

readableTest();
Http.getHttpStream();

const op: Options = {};
op.host = 'jsonplaceholder.typicode.com';
op.path = '/todos/1';
op.method = 'GET';
//op.headers['Content-ytpe', 'application/json']; ????Index signature
//op.headers = [ header['Content-type'], 'application/json'];
//op.headers['Accept'] = 'application/json';
//Http.request(op).then(res => console.log(res));
(async () => {
    try {
        console.log('*********Before');
        let x:string = await Http.request(op);
        console.log(x);
        console.log('*********After');
    } catch(err) {
        console.error('Error Cached '+ err)
    }
 
})();

