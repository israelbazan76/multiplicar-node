/*let base=2;

for(let i = 1;  i <= 10; i++){
	console.log(`${base} * ${i} = ${base*i}`);
}*/

const argv=require('./config/yargs').argv;


const { crearArchivo, listarTabla} = require('./multiplicar');

/*console.log(argv.base);
console.log(argv.limite);
*/
let comando=argv._[0];
switch(comando){

	case 'listar':
		listarTabla(argv.base,argv.limite)
			.then(data=>console.log(data))
			.catch(e=>console.log(e));
		break;
	case 'crear':
		crearArchivo(argv.base,argv.limite)
			.then(archivo=>console.log(`archivo creado: ${archivo}`))
			.catch(e=>console.log(e));
		break;
	default:
		console.log('el comando no existe');
}


/*

const { crearArchivo } = require('./multiplicar');
let base='jaja';

crearArchivo(base)
.then(archivo=>console.log(`archivo creado: ${archivo}`))
.catch(e=>console.log(e));

*/