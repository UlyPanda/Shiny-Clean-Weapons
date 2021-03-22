const mysql = require('mysql');
const pool = require('../sql/connection');
const { handleSQLError } = require('../sql/error');

const getAllWeapons = (req, res) => {
    pool.query("SELECT * FROM weapons", (err, rows) => {
        if (err) return handleSQLError(res, err)
        return res.json(rows);
    })
};

const getSingleWeapon = (req, res) => {
    pool.query("SELECT * FROM weapons WHERE weapon_id = ?", (err, rows) => {
        if (err) return handleSQLError(res, err)
        return res.json(rows);
    })
}

module.exports = {
    getAllWeapons,
    getSingleWeapon
}