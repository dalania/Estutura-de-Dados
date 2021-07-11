
class Node{
	constructor(dado){
		this.dado = dado;
		this.proximo = null;
	}
}

class Lista{

	constructor(){
		this.head = new Node();


	}

	add(dado){
		let novo_no = new Node(dado);
		
			novo_no.proximo = this.head.proximo;
			this.head.proximo = novo_no;
	}

	append(dado){
		let novo_no = new Node(dado);
		if(this.isEmpty()){
			this.head.proximo = novo_no;

		}else{
			//guarda a cabeça da lista
			let node_a = this.head;
			//enquanto a posição 1 da lista até a posição n difernete de null ele vai andar na lista até encontrar um elemento que aponta pra null
			while(node_a.proximo!=null){
				node_a = node_a.proximo
			}
			//quando ele sair do laço ele vai pegar aquela posição que aponta pra null e adicionar o novo no que foi criado;
			node_a.proximo =novo_no;

		}
	}

	removeFirst(){
		if(this.isEmpty()){
			throw new Error("already is empty")
		}else{
			let first = this.head.proximo;
			this.head.proximo = first.proximo;


		}
	}

	removeLast(){
		if(!this.isEmpty()){
			//Guarda o indice que está a cabeça da lista
			let auxA = this.head;
			//guarda a primeira posição da lista
			let auxB = this.head.proximo;
			//percorre a lista ate encontrar um noll que aponta pra nulo, quando encontrar ele vai sair do while
			while(auxB.proximo !== null){
				//a minha variavel auxiliar vai ser igual a minha auxiliar de B
				auxA = auxB;
				//minha variavel auxiliar de b vai andar na lista até encontrar um no que seja nulo, e se encontar vai sair do laço
				auxB = auxA.proximo;

			}
			auxA.proximo = null;

		}else{
			throw new Error("already is empty");
		}

	}

	isEmpty(){
		return this.head.proximo === null;
	}

	length(){
		let size = 0;
		let aux = this.head;

		while(aux.proximo!==null){
			aux = aux.proximo;
			size++;
		}
		return size;

	}

	top(){
		if(this.isEmpty()){
      throw new Error("A lista está vazia")
  }
  return this.head.proximo.dado;

}
	

	
}

export default Lista;