export default function(app) {
    app.set('DEV_WEB_SERVER', 'http://localhost:3000');

    app.set('PGUSER', process.env.PGUSER || 'boomtown');
    app.set('PGPASSWORD', process.env.PGPASSWORD || 'boomtown');
    app.set('PGDATABASE', process.env.PGDATABASE || 'boomtown');
    app.set('PGHOST', process.env.PGHOST || 'localhost');

    app.set(
        'FIREBASE_API_KEY',
        process.env.FIREBASE_API_KEY ||
            'AIzaSyBudbYt5QamAB7mAY3rvufK_SlXewLc00Q'
    );
    app.set(
        'FIREBASE_AUTH_DOMAIN',
        process.env.FIREBASE_AUTH_DOMAIN || 'boomtown-e0104.firebaseapp.com'
    );
    app.set(
        'FIREBASE_DB_URL',
        process.env.FIREBASE_DB_URL || 'https://boomtown-e0104.firebaseio.com'
    );
    app.set(
        'FIREBASE_PROJECT_ID',
        process.env.FIREBASE_PROJECT_ID || 'boomtown-e0104'
    );
    app.set(
        'FIREBASE_STORAGE_BUCKET',
        process.env.FIREBASE_STORAGE_BUCKET || ''
    );
    app.set(
        'FIREBASE_MESS_SENDID',
        process.env.FIREBASE_MESS_SENDID || '611356202136'
    );
}
