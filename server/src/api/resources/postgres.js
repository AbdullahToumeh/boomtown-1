import { Pool } from 'pg';

export default function(app) {
    const pool = new Pool({
        user: app.get('PGUSER'),
        host: app.get('PGHOST'),
        database: app.get('PGDATABASE'),
        password: app.get('PGPASSWORD')
    });

    return {
        getItems() {
            return pool.query('SELECT * FROM items').then(res => res.rows);
        },
        getItem(id) {
            return pool
                .query(`SELECT * FROM items WHERE id=${id}`)
                .then(res => res.rows[0]);
        },
        addItem(args) {
            return pool.connect((err, client, done) => {
                const shouldAbort = err => {
                    if (err) {
                        console.error('Error in transaction', err.stack);
                        client.query('ROLLBACK', err => {
                            if (err) {
                                console.error(
                                    'Error rolling back client',
                                    err.stack
                                );
                            }
                            // release the client back to the pool
                            done();
                        });
                    }
                    return !!err;
                };

                client.query('BEGIN', err => {
                    if (shouldAbort(err)) return;
                    client
                        .query(
                            `INSERT INTO items(title, imageurl, description, itemowner) VALUES ($1, $2, $3, $4) RETURNING id, title, imageurl, description, itemowner, borrower, created`,
                            [
                                args.title,
                                args.imageurl,
                                args.description,
                                args.itemowner
                            ]
                        )
                        .then(res => res.rows)
                        .then(() => {
                            client.query('COMMIT', err => {
                                if (err) {
                                    console.error(
                                        'Error committing transaction',
                                        err.stack
                                    );
                                }
                                done();
                            });
                        })
                        .catch(err => console.log(err));
                });
            });
        }
    };
}
