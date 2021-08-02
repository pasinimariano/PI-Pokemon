const toCaps = (DB_CONN) => {
    let entries = Object.entries(DB_CONN.models);
    let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
    DB_CONN.models = Object.fromEntries(capsEntries);
}

module.exports = toCaps