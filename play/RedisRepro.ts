import * as Redis from 'ioredis';
export class RedisRepro {
    repro = new Redis();
    constructor() {
    }
    async setColbyRow(colName:string, rowNumber:number) {
       await this.repro.sadd('col-row:'+colName, rowNumber); 
    }
    async setCol(colName:string, colValue:string) {
        await this.repro.sadd('col:'+colName, colValue);
    }
}