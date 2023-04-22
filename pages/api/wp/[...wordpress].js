// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const request = require('request').defaults({ encoding: null });
// const { HOST } = require('../../config');

export default function handler(req, res) {
  const path = req.query.wordpress.join('/');
//   console.log()
  console.log(path);
//   res.end()
  res.redirect(307, '/' + encodeURIComponent(path));
}
