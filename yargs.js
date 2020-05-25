// Configurar parametros para ejecutar los comandos 
const optionsConsole = {
    base: {
        demand: true,
        alias: 'b'
    },
    start: {
        alias: 'ra',
        default: 1
    },
    end: {
        alias: 'rb',
        default: 10
    }
};

const  argv = require('yargs')
    .command('list', 'print in console the table of multiply', optionsConsole)
    .command('create', 'create file with table of multiply', optionsConsole)
    .help()
    .argv;

module.exports = {
    argv
};