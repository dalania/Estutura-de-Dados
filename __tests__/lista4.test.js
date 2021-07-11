import Lista from '../src/lista_base';
import inverte from '../src/inverte';

let lista;
beforeEach(()=>{
  lista = new Lista();
  
})

test("iniciação", ()=>{
  expect(lista.isEmpty()).toBe(true);
})

test("Embaralhar", ()=>{
  lista.add(1);
  lista.append(2);
  lista.append(3);
  lista.append(4);
  lista.append(5);
  
  console.log(lista.toString());
  inverte(lista);
  expect(lista.toString()).toBe("54321");
  console.log(lista.toString());

  
 
 
  
})

