import Lista from '../src/lista5';
import embaralhar from '../src/lista5Funcao';

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
  embaralhar(lista);
  console.log(lista.toString());

  
 
 
  
})