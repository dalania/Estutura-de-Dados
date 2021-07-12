import Pilha from "../../src/listas/pilha1";

let p;

beforeEach(() =>{
    p = new Pilha();
});

test("construtor & isEmpty", () => {
    expect(p.isEmpty()).toBe(true);
});

test("push & length & top", () => {
    p.push(1);
    p.push(2);
    p.push(3);
    expect(p.length()).toBe(3);
    expect(p.top()).toBe(3)
});

test("pop", () => {
    p.push(1);
    p.push(2);
    p.push(3);
    p.pop();
    p.pop();
    expect(p.length()).toBe(1);
});