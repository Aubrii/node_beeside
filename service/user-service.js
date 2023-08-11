const db = require('../db');

module.exports = {
    authenticate,
    getAll,
    getById,
    create,
};

async function authenticate(email, password) {
    console.log('email', email)
    console.log('password', password)
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM users WHERE email = ? AND password = ? ", [email, password], function (err, result, fields) {
            console.log("result authentificate", result)
            if (err | !result) {
                console.log('error', err);
                reject(err);
            } else {
                console.log("result", result);
                resolve(result[0]);
            }
        });
    });

    //
    //
    // const user = await db.query('SELECT * FROM users WHERE email = ? AND password = ?',
    //     [email, password]
    // );
    // if (!user )
    //     throw 'Username or password is incorrect';
    // else{
    //     return user
    // }
}


async function getAll() {
    try {
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM users", function (err, result, fields) {
                if (err) {
                    console.log('error', err);
                    reject(err);
                } else {
                    console.log(result);
                    resolve(result);
                }
            });
        });
    } catch (error) {
        console.log('error ?')
        throw error;
    }
}


async function getById(userId) {
    try {
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM users WHERE id = ?", [userId], function (err, result, fields) {
                if (err) {
                    console.log('error', err);
                    reject(err);
                } else {
                    console.log(result);
                    resolve(result);
                }
            });
        });
    } catch (error) {
        throw error;
    } finally {
        db.end();
    }
}

async function create(users) {
    try {
        return new Promise((resolve, reject) => {
            db.query("INSERT INTO users (lastName, firstName, email, password, role) VALUES (?, ? ,? ,? ,?)",
                [users.lastName, users.firstName, users.email, users.password], function (err, result, fields) {
                    if (err) {
                        console.log('error', err);
                        reject(err);
                    } else {
                        console.log(result);
                        resolve(result);
                    }
                });
        });
    } catch (error) {
        throw error;
    }
}

