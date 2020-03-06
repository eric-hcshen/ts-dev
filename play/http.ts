import {request, RequestOptions, IncomingMessage} from 'http';
import {createWriteStream} from 'fs';
import { resolve } from 'dns';

export interface Options extends RequestOptions {}
export class Http {
    public static getHttpStream() {
        const fileStream = createWriteStream('./http.txt');
        const req = request(
            {host: 'jsonplaceholder.typicode.com', path:'/users/1', method: 'GET'},
            response => response.pipe(fileStream)
        );
        req.end();
    }
    public static request(options: RequestOptions): Promise<string> {
        return new Promise((resolve, reject) => {
          request(options, (response) => {
              console.log(response.statusCode);
              if (response.statusCode >= 300) {
                reject(new Error(response.statusMessage));
              }
              const chunks = [];
              //response.on('error', (Error) => {throw new TypeError('Hi Error Here')});
              response.on('data', chunk => {chunks.push(chunk)
                    console.log('111' + chunk);
                });
              response.on('end', () => {
                    const buf = Buffer.concat(chunks).toString();
                    resolve(JSON.parse(buf));
              });
          }
            ) .end();  
        });
    }
}