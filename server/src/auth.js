import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';

export default function(app) {
    const APP_SECRET = process.env.APP_SECRET || 'keyboardcat';

    //where we set up the name and information for our cookie
    const config = {
        JWT: {
            name: 'thursday_token',
            secret: APP_SECRET,
            expires: 60 * 60 * 60
        }
    };

    //checks if the cookie exists with the required name, check to see if whats inside the token is correct then redirect to index, otherwise redirect to login
    // verify decrypts the token
    // checks if user exists and if username and password are correct (would normally check the database here), then nexts onto the index page
    const auth = (req, res, next) => {
        //Is there a cookie? Is the cookie our user information?
        // SHOULD BE REFACTORED TO CHECK FOR NO INSTANCE OF COOKIES FIRST, THEN OTHER CODE IN THE ELSE
        if (req.cookies && req.cookies[config.JWT.name]) {
            try {
                //decode the user from the token
                const user = jwt.verify(
                    req.cookies[config.JWT.name],
                    config.JWT.secret
                );
                // Replace with a SQL query to check database instead of hardcoding
                // Check for the COOKIE information not the response information
                if (
                    user &&
                    user.name === 'cat' &&
                    user.email === 'cats@kittens.com'
                ) {
                    //should check token expiry and other things but oh well for this!
                    next();
                }
            } catch (e) {
                res.status(401).redirect('/login');
            }
        } else {
            res.status(401).redirect('/login');
        }
    };

    app.use(cookieParser());
}
