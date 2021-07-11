
import Lista from '../src/lista2';
export default class Fila{
  
  constructor(){
    this.lista = new Lista();
  
  }

  enqueue(dado){
    this.lista.append(dado);
  };

  dequeue(){
    if(!this.lista.isEmpty()){
      this.lista.removeFirst();

    }else{
      throw new Error("queue underflow");
    }
    
  };

  length(){
    return this.lista.length();
  };

  isEmpty(){
    return this.lista.isEmpty();
  };

  front(){
    if(!this.lista.isEmpty()){
      return this.lista.top();
  

    }else{
      throw new Error("queue underflow");

    }
    
     
    
  };



}