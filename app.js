
const { argv } = require('./yargs');
const colors = require('colors');

console.log(argv);
const {
    createFileTxt, toList
} = require('./multiplicar/multiplicar');

let command = argv._[0];

let {
    base,start,end
} = argv;
switch (command) {
    case 'list':
        toList(base, start, end);
        break;
    case 'create':
        createFileTxt(base,start,end)
            .then(filename => console.log(`File created : ${filename}`))
            .catch(err => console.log(err));
        break;

    default:
        console.log('comman unrecognized');
        break;
}

//console.log(`Limit start: ${argv.start}`);
//console.log(argv);
//console.log(argv2);

// let parameter = argv[2];
// let base = parameter.split('=')[1];

// if (Number(base)) {
//     createFileTxt(base)
//         .then(filename => console.log(`File created : ${filename}`))
//         .catch(err => console.log(err));
// }