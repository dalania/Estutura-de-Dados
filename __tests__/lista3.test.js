import Lista from '../src/lista3';

let lista;
beforeEach(()=>{
  lista = new Lista();
  
})

test("iniciação", ()=>{
  expect(lista.isEmpty()).toBe(true);
})

test("add", ()=>{
  lista.add(1);
  lista.add(2);
  
  expect(lista.length()).toBe(3);
})

test("append", ()=>{
  /* lista.add(1);
  lista.add(2); */
  lista.append(99);
  
  expect(lista.length()).toBe(1);
})

test("removeFirst", ()=>{
  lista.append(2);
  lista.append(3);
  lista.removeFirst();
  expect(lista.length()).toBe(1);
})




