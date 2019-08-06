export default {
  secret: process.env.AUTH_SECRET || 'ADD_SECRECT',
  expiresIn: process.env.AUTH_SECRET_EXPIRES || '7d',
};
