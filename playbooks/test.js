let array = process.argv[3]

let mac = process.argv[2]
let hello = array.split('##')

function getIpFromMac(array, mac) {
    let index = array.findIndex(line => line.includes(mac))
    let ipLine = index - 2
    let ip = array[ipLine].toString().match(/\b(?:\d{1,3}\.){3}\d{1,3}\b/g)
    console.log(`${ip}`)
}
getIpFromMac(hello, mac)
mac = ''
array = ''
hello = ''