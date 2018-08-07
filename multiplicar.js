const fs=require('fs');



let crearArchivo=(base,limite=10)=>{

    return new Promise((resolve,reject)=>{
      
      if(!Number(base)){
      	reject(`el valor introducido ${base} no es un numero`);
      	return;
      }
      if(!Number(limite)){
      	reject(`el valor introducido ${limite} no es un numero`);
      	return;
      }
      let data='';
	  for(let i = 1; i <= limite; i++){
			data += ` ${base} x ${i} = ${base*i} \n`;
	  }

	  fs.writeFile(`tabla-del-${base}-desde-el-1-hasta-el-${limite}.txt`, data, (err) => {
		  if (err) 
		  	reject(err);
		  else
		  	resolve(`tabla-del-${base}-desde-el-1-hasta-el-${limite}.txt`);
		});
       
    });

};

let listarTabla=(base,limite)=>{

    return new Promise((resolve,reject)=>{
      
      if(!Number(base)){
      	reject(`el valor introducido ${base} no es un numero`);
      	return;
      }
      if(!Number(limite)){
      	reject(`el valor introducido ${limite} no es un numero`);
      	return;
      }
      let data='';
	  for(let i = 1; i <= limite; i++){
			data += ` ${base} x ${i} = ${base*i} \n`;
	  }

	  resolve(data);
	 
    });

};

//aqui se definen las funciones globales que se quieren poner
//como disponibles a lo largo de la aplicacion
module.exports = {
	crearArchivo,listarTabla
}

