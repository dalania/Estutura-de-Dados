/**
 * Implemente um algoritmo que recebe os dados de nome e idade de uma pessoa 
   em qualquer ordem e os coloca em uma lista simplesmente encadeada. Implemente dois 
   métodos, um para retornar uma nova lista em ordem alfabética e outro para retornar uma nova 
   lista por ordem de idade (do menor para o maior)
 */

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class NodeContact {
    constructor(name, age){
        this.name = name;
        this.age = age;
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

    addCtt(name,age) {
        let newCtt = new NodeContact(name,age);
        if(this.isEmpty()) {
            this.head.next = newCtt;
        }else {
            newCtt.next = this.head.next;
            this.head.next = newCtt;
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

    appendCtt(name,age) {
        let newCtt = new NodeContact(name,age);
        let nextCtt = this.head;
        if(this.isEmpty()) {
            this.head.next = newCtt;
        }else{
            while(nextCtt.next !== null){
                nextCtt = nextCtt.next;
            }
            nextCtt.next = newCtt;
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
        }else { 
            throw new Error("list is empty");
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

    search(age){
        if(!this.isEmpty()){
            let nextCtt = this.head;
            while(nextCtt.next !== null){
                if(nextCtt.age === age){
                    return true;
                }
                nextCtt = nextCtt.next;
            }
        }
        return nextCtt;
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
        return "its Empty";
    }

    toStringCtt() {
        if(!this.isEmpty()) {
            let content = "";
            let nextCtt = this.head;
            while(nextCtt.next !== null) {
                nextCtt = nextCtt.next;
                content += " " + nextCtt.name + " " + nextCtt.age;
            }
            return content;
        }
    }

    orderAge() {
        if(!this.isEmpty()) {
            let auxList = new List();
            let nextCtt;
            while(!this.isEmpty()){
                nextCtt = this.head;
                let auxMenor = null;
                let index;
                for(let i = 0; i < this.length(); i++) {
                    nextCtt = nextCtt.next;
                    if(auxMenor === null ){
                        auxMenor = nextCtt;
                    }else if(nextCtt.age <= auxMenor.age) {
                        auxMenor = nextCtt;
                        index = i;
                    }
                }
                auxList.appendCtt(auxMenor.name, auxMenor.age);
                this.removeAt(index);
            }
            return auxList;
        }
    }

    orderName() {
        if(!this.isEmpty()) {
            let auxList = new List();
            let nextCtt;
            while(!this.isEmpty()){
                nextCtt = this.head;
                let auxMenor = null;
                let index;
                for(let i = 0; i < this.length(); i++) {
                    nextCtt = nextCtt.next;
                    if(auxMenor === null ){
                        auxMenor = nextCtt;
                    }else if((nextCtt.name.toUpperCase()).codePointAt(0) <= (auxMenor.name.toUpperCase()).codePointAt(0)) {
                        auxMenor = nextCtt;
                        index = i;
                    }
                }
                auxList.appendCtt(auxMenor.name, auxMenor.age);
                this.removeAt(index);
            }
            return auxList;
        }
    }

}

export default List;