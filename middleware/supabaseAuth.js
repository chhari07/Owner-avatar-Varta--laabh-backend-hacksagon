// middlewares/supabaseAuth.js
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

module.exports = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Missing token' });

  try {
    const { data, error } = await supabase.auth.getUser(token);
    if (error || !data?.user) {
      return res.status(401).json({ message: 'Invalid token' });
    }
    req.user = data.user;
    next();
  } catch (err) {
    return res.status(500).json({ message: 'Supabase auth failed', error: err.message });
  }
};
