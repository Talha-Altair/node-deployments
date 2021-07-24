const { toInteger } = require('lodash');
const os = require('os')

async function start() {

    let user1 = os.uptime()

    // console.log(user1)

    await new Promise(resolve => setTimeout(resolve, 1000));

    let user2 = toInteger(`${os.uptime()}`)

    // console.log(user2)

    console.log(user2 - user1)

}

if (require.main === module) {
    start();
}
