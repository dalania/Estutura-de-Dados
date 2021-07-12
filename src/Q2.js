import List from '../../src/listas/lista_base';

export default class Fila {

    constructor(){
        this.fila = new List();
    }

    enqueue(dado) {
        this.fila.append(dado);
    }

    dequeue() {
        this.fila.removeFirst();
    }

    isEmpty(){
        return this.fila.isEmpty();
    }

    size() {
        return this.fila.length();
    }

    clear() {
        this.fila.clear();
    }

    front(){
        return this.fila.front();
    }

}