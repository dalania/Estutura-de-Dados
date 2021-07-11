export default function embaralhar(list){

  let number;
  

  for(let i = 0; i < list.length(); i ++){
   number = Math.round(Math.random() * list.length()); 
   list.addAt(number,list.removeLast());
  }




}