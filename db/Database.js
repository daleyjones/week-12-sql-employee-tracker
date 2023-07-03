const mysql = require('mysql2');

class Database {
    constructor(options) {
        this.options = options;
        this.db = null;
    }

    validate() {
        const { host, user, password, database } = this.options;
        if (!host || !user || !password || !database) {
            throw new Error('Database configuration is invalid.');
        }
    }

    connect() {
        this.validate();

        const { host, user, password, database } = this.options;
        this.db = mysql.createConnection({
            host: host,
            user: user,
            password: password,
            database: database
        });

        this.db.connect((error) => {
            if (error) {
                console.error('Error connecting to the database:', error);
            } else {
                console.log('Connected to the Employee database.');
            }
        });
    }

    disconnect() {
        this.db.end((error) => {
            if (error) {
                console.error('Error disconnecting from the database:', error);
            } else {
                console.log('Disconnected from the Employee database.');
            }
        });
    }
}

module.exports = Database;
