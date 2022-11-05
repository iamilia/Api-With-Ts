import * as mysql from 'mysql2/promise';


export async function Execute(sql : string, param : Array<number | string>) {
    let err: unknown
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
    return await new Promise((reject, resolve) => {
        if (err) return reject(err)
        resolve(__rows)
    })  
}

// m.Execute("SELECT * FROM `table` WHERE name = ?", ["Page"]).then((v) => {
//     if (typeof v === "object" && v) {
        
//     }
// }).catch(e => console.error(e))

// import * as m from "./src/models/mysql";