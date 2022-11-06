import * as mysql from 'mysql2/promise';


export async function Execute<T, T2>(sql : string, param : T2) {
    let err: any
    let __rows: mysql.FieldPacket[]
    await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'test'
    }).then(async(conn) => {
        await conn.query(sql, param).then(([rows, fields]) => {
            __rows = fields
            err = rows
        });
        await conn.end()
    })
    return await new Promise<T>((reject, resolve) => {
        if (err) return reject(err)
        resolve(__rows)
    })  
}

export interface SqlInsert {
    affectedRows : number;
    insertId : number;
    fieldCount: number,
    info: string,
    serverStatus: number,
    warningStatus: number
}