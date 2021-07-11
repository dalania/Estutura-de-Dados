import Lista from '../src/lista6';
import toString from '../src/lista6Funcao';

let lista;
beforeEach(()=>{
  lista = new Lista();
});

test("inicialização", ()=>{
  expect(lista.isEmpty()).toBe(true);
})

test("appendString", ()=>{
  /* lista.appendString("DALANIA"); */
  /* console.log(lista.toString());
  console.log(lista.length()); */

});

test("substring", ()=>{
  lista.appendString("DALANIA");
  /* console.log(lista.toString()) */;
  
   console.log(lista.substring(0,4))

})