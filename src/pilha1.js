import Lista from './lista1';

class Pilha{

  constructor(){
    this.lista = new Lista();
  }

  push(dado){
    this.lista.append(dado);
  }

  pop(){
    if(!this.lista.isEmpty()){
      this.lista.removeLast();

    }else{
      throw new Error("stack underflow");

    }
    
  }

  top(){
    return this.lista.top();

  }

  isEmpty(){
    return this.lista.isEmpty();
  }

  length(){
    return this.lista.length();
  }





}

export default Pilha;