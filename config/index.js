module.exports = {
    local: {
        port: 9000,
        mongo: process.env.MONGODB || 'mongodb://localhost:27017/companion',
        hosts: {
            self: 'http://localhost:9000/',
            api: 'http://localhost:3000/'
        }
    },
    production: {
        port: 80,
        mongo: process.env.MONGODB || 'mongodb://localhost:27017/companion',
        hosts: {
            self: 'http://usecompanion.com/',
            api: 'http://api.usecompanion.com/'
        }
    }
}[process.env.NODE_ENV || 'development'];
