//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const server = require('./src/app')
const config = require('./src/libs/config/config')
const { CONN } = require('./src/db/connection')

const { PORT, HOST } = config

CONN.sync()
  .then(async () => {
    try {
      await CONN.authenticate()
      console.log('Connection with DB has been successful')
    } catch (error) {
      console.error('Unable to connect to the DB: ', error)
    }
  })

  .then(() => {
    server.listen(PORT, HOST, () => {
      console.log(`Server running on ${HOST}:${PORT}`)
    })
  })
