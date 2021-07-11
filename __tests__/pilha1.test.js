import Pilha from '../src/pilha1';

let pilha;
beforeEach(()=>{
  pilha = new Pilha();
  
})

test("initial is empty", ()=>{
  expect(pilha.isEmpty()).toBe(true);
});

test("push, length", ()=>{
  pilha.push("1");
  pilha.push("2")
  expect(pilha.isEmpty()).toBe(false);
  expect(pilha.length()).toBe(2);

})
test("Stack underflow",
		() => {
			expect(()=>{
				pilha.pop();
        pilha.pop();
			}).toThrowError("stack underflow");
		}
)
