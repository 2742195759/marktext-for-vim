const logger = require('electron-log')
logger.transports.file.file = 'C:/Users/xiongkun/Desktop/linux/marktext/marktext/log.txt'
logger.info('start process remote controller.')
const {
    Worker, MessageChannel
} = require('node:worker_threads')
console.log('start run main thread.')
const worker = new Worker('./controller')
const subChannel = new MessageChannel()
console.log('worker started.')
worker.postMessage({ hereIsYourPort: subChannel.port1 }, [subChannel.port1])
subChannel.port2.on('message', (value) => {
    console.log('received:', value)
    console.log('start send `mt::cursor_move` with: ', value.line, ' and ', value.col)
})
console.log('end server listening.')
