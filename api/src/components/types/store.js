const controller = require('./controller')

const {
  getTypesDB,
  getANDcreate
} = controller

const responseTypes = async () => {
  const recordsDB = await getTypesDB()

  if (recordsDB.length === 0) {
    return await getANDcreate()
  } else {
    const response = await recordsDB.map(obj => obj.dataValues.name)
    return response
  }
}

module.exports = {
  responseTypes
}
