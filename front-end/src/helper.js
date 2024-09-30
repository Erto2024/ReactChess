const rank = Array(8).fill().map((x,i) => 8-i);
const files = Array(8).fill().map((x,i) => String.fromCharCode(i+97))


const getClassName = (i,j) =>{
  let c = "file";
  c+= (i+j) % 2 === 0 ? 'tile--light' : 'tile--dark'
  return c 
}