const fs = require('fs');
const colors = require('colors/safe');

let toList = (base,start=1, end=10) => {
    
    console.log('----------------------'.green);
    console.log('TABLA DE MULTIPLICAR'.green);
    console.log('-----------------------'.green);
    let data = '';
    for (let i = start; i <= end; i++) {
        data += `${base} * ${i} = ${i*base} \n`;
    }
    console.log(data.white);
}


let createFileTxt = (base, start=1, end=10) => {
    return new Promise((resolve, reject) => {        
        if (Number(base)) {
            
            let data = '';
            for (let i = start; i <= end; i++) {
                data += `${base} * ${i} = ${i*base} \n`;
            }
    
            // escribir en un archivo txt
            fs.writeFile(`./tablas/tablaDel${base}-del-${start}-al-${end}.txt`, data, (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(colors.blue(`tablaDel${base}-del-${start}-al-${end}.txt`));
                }
            });
        } else {
            reject('is not a number');
        }
    });
}

// exportar el modulo
module.exports = {
    createFileTxt,
    toList
}
