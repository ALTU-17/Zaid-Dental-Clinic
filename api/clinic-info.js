const { clinicInfo } = require('../server/data');

module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.json(clinicInfo);
};