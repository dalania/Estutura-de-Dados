import Fila from '../src/fila2';

let fila;
beforeEach(()=>{
  fila = new Fila();
  
})

test("instanciação", ()=>{
  expect(fila.isEmpty()).toBe(true);
	expect(fila.length()).toBe(0);
	expect(()=>{
		fila.dequeue();

	}).toThrowError("queue underflow")

})

test("isEmpty", ()=>{
  expect(fila.isEmpty()).toBe(true);
})

test("push, length", ()=>{
  fila.enqueue(1);
  fila.enqueue(2);
  fila.enqueue(3);
  expect(fila.length()).toBe(3);
})

test("front, dequeue", ()=>{
  fila.enqueue(1);
  fila.enqueue(2);
  fila.enqueue(3);
  fila.dequeue();
  expect(fila.front()).toBe(2);
})