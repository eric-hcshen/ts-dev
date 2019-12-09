import * as express from 'express';  //for commonjs style
import {Request, Response} from 'express';

//const app:express.Application;

const app = express();

app.get('/', (req: Request, res:Response) => {
    console.log('debug');
    res.send('hello');
});
app.listen(80, () => {console.log('running')});