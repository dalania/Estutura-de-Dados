import embaralhar from './lista5Funcao';

/*  

Implemente uma função para embaralhar a ordem dos elementos de uma lista
simplesmente encadeada.

*/

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class List_reverse {
    

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
        throw new Error("list is empty");
    }

    removeLast() {
        if(!this.isEmpty()) {
            let a = this.head;
            let b = this.head.next;
            while(b.next !== null){
                a = b;
                b = b.next;
            }
            a.next = null;
            return b.data;

        }
        throw new Error("list is empty");
       
    }

    removeAt(index) {
        if(!this.isEmpty()){
            let a = this.head;
            let b = this.head.next;
            for(let i = 0; i < index; i++){
                a = b;
                b = b.next;
            }
            a.next = b.next;
        }
        throw new Error("list is empty");
        
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

export default List_reverse;