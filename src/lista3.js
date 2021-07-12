class No{
  constructor(dado){
      this.dado =  dado;
      this.proximo = null;
  }
}

class lista{
  
  constructor(){
      this.lista = [];
      this.lista[0] = new No();
  }

  add(dado){
     let novo_no = new No(dado);
     let i = this.lista.length;

     this.lista[i] = novo_no;
     novo_no.proximo = this.lista[0].proximo;
     this.lista[0].proximo = i; 
  }

  append(dado){
        
    let novo_no = new No(dado);
    let nextNode = this.lista[0];
    if(this.isEmpty()){
      this.lista[0].proximo = novo_no;
    }else{
      while(nextNode.proximo !==null){
        nextNode = nextNode.proximo;
      }
      nextNode.proximo = novo_no;
    }

   
}


  removeFirst(){

      if(this.isEmpty()){
          throw new Error("A lista está vazia.");
      }else{
          let aux = this.lista[0].proximo;
          this.lista[0].proximo = aux.proximo; // [2,5]
          
      }
  }
   length(){
     return this.lista.length;
   }
  removeLast(){

      if (this.isEmpty()) {
          throw new Error("A lista está vazia.");
      }else{
          let aux_a = this.lista[0];
          let aux_b = this.lista[0].proximo;
          while(aux_b !== null){
              aux_a = aux_b;
              aux_b = aux_b.proximo;
          }
          aux_a.proximo = null;
      }
  }

  isEmpty(){
      return this.lista[0].proximo === null;
  }  

 
  clear(){
      this.lista[0] = new No(null);
  }

  toString(){
      let aux = this.lista[0].proximo; 
      let resultado = "";
      while(aux !== null){
          aux = aux.proximo;
          resultado += aux.dado;
      }
      return resultado;
  }

}


export default lista;