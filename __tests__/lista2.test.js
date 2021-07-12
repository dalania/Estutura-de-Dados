import Fila from '../../src/listas/Q2'

let f;

beforeEach(() => {
    f = new Fila();
});

test("instanciar", () => {
    expect(f.isEmpty()).toBe(true);
});

test("enqueue & size & front", () => {
    f.enqueue(1);
    f.enqueue(2);
    f.enqueue(3);
    expect(f.size()).toBe(3);
    expect(f.front()).toBe(1);
});

test("clear", () => {
    f.enqueue(1);
    f.enqueue(2);
    f.enqueue(3);
    f.clear();
    expect(f.size()).toBe(0);
});

test("dequeue", () => {
    f.enqueue(1);
    f.enqueue(2);
    f.enqueue(3);
    f.dequeue();
    f.dequeue();
    expect(f.front()).toBe(3);
});
