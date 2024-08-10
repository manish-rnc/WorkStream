import jwt from 'jsonwebtoken';

const isAuthenticated = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).send('Access denied');
    }
    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.userId = decoded.userId;
        next();
    } catch (err) {
        res.status(401).send('Invalid token');
    }
};

export default isAuthenticated;
