/**
 * @param {number} millis
 */
async function sleep(millis) {
    await new Promise(resolve => setTimeout(resolve, millis));;
    return Date.now()
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */