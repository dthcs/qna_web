// middleware.js
const checkUserRole = (req, res, next) => {
    if (req.user && req.user.role === 'user') {
      next();
    } else {
      res.status(403).json({ error: 'Access denied' });
    }
  };
  
  const checkAdminRole = (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
      next();
    } else {
      res.status(403).json({ error: 'Access denied' });
    }
  };
  
  module.exports = { checkUserRole, checkAdminRole };
  