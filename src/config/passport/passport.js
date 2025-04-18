import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import { userDao } from '../../daos/usersDao/userDao.js';

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET_JWT
};

passport.use(new JwtStrategy(opts, async (jwt_payload, done) => {
    try {
        const user = await userDao.getById(jwt_payload.id);
        if (!user){
            return done(null, false);
        }
        return done(null, user);
    } catch (error) {
        return done(error, false)
    }
}));

export default passport;