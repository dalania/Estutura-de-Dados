import embaralhar from './lista5Funcao';

/*  

Uma lista pode ser utilizada para armazenar dados do tipo texto “string” onde cada
caractere fica armazenado em um nó. Implemente uma lista que armazena uma string e
implemente a função substring(A, B) que retorna uma nova lista contendo apenas os caracteres
da posição A até a posição B.

*/

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class List {
    

    constructor() {
        this.head = new Node();
    }

    add(data) {
        let newNode = new Node(data);
        if(this.isEmpty()){
            this.head.next = newNode;
        }else{
            newNode.next = this.head.next;
            this.head.next = newNode;
        }
    }

    append(data) {
        let newNode = new Node(data);
        let nextNode = this.head;
        if(this.isEmpty()) {
            this.head.next = newNode;
        }else{
            while(nextNode.next !== null){
                nextNode = nextNode.next;
            }
            nextNode.next = newNode;
        }

    }
    
    appendString(string){
        for(let i=0; i<string.length; i++){
            this.append(string[i]);
        }

    }

    substring(A,B){
        let list2;
        list2 = new List();
        
        for(let i=A; i<=B; i++){
            let number;
            number = this.removeAt(i);
           
            
            list2.append(number)
           
        }

        return list2.toString();

    }

    addAt(index, data) {
        if(index > this.length()) {
            this.append(data);
        }else{ 
           let newNode = new Node(data);
           let a = this.head;
           let b = this.head.next;
           for(let i = 0; i < index; i++){
               a = b;
               b = b.next;
           }
           newNode.next = b;
           a.next = newNode;
        }
    }

    removeFirst() {
        if(!this.isEmpty()) {
            let aux = this.head.next;
            this.head.next = aux.next;
            return aux.data;
        }
    }

    removeLast() {
        let a = this.head;
        let b = this.head.next;
        while(b.next !== null){
            a = b;
            b = b.next;
        }
        a.next = null;
        return b.data;
    }

    removeAt(index) {
        if(!this.isEmpty()){
            let a = this.head;
            let b = this.head.next;
            
            for(let i = 0; i < index; i++){
                a = b;
                b = b.next;
            }
             a = b.next;
             return b.data;
            
        }
        
    }

    isEmpty() {
        return this.head.next === null;
    }

    search(data){
        if(!this.isEmpty()){
            let nextNode = this.head;
            while(nextNode.next !== null){
                if(nextNode.data === data){
                    return true;
                }
                nextNode = nextNode.next;
            }
        }
        return false;
    }

    length() {
        let count = 0;
        let nextNode = this.head;
        while(nextNode.next !== null) {
            nextNode = nextNode.next;
            count++;
        }
        return count;
    }

    toString() {
        if(!this.isEmpty()) {
            let content = "";
            let nextNode = this.head;
            while(nextNode.next !== null) {
                nextNode = nextNode.next;
                content += nextNode.data;
            }
            return content;
        }
        return "itsEmpty";
    }

}

export default List;