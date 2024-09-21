const db = require('../../utils/mysql').db;

module.exports.register = async (req, res) =>{
    const [results, fields] = await db.query(
        'INSERT INTO '
    )

}