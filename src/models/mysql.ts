import * as mysql from 'mysql2/promise';


export async function Execute<T>(sql : string, param : Array<number | string>) {
    let err: any
    let __rows: mysql.FieldPacket[]
    let connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'test'
    }).then(conn => conn.query(sql, param))
    .then(([rows, fields]) => {
        __rows = fields
        err = rows
    } 
    );
    return await new Promise<T>((reject, resolve) => {
        if (err) return reject(err)
        resolve(__rows)
    })  
}