const fs=require('fs');

let data='';
let base=2;

for(let i = 1; i <= 10; i++){
	data += ` ${base} x ${i} = ${base*i} \n`;
}

fs.writeFile(`tabla-del-${base}.txt`, data, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});