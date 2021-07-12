import List from "../../src/listas/lista_base";

let list;

beforeEach(() => {
    list = new List();
})

test("constructor", () => {
    expect(list.isEmpty()).toBe(true);
});

test("appendCtt", () => {
    list.addCtt("Geoge", 20);
    list.addCtt("Dalania", 20);
    expect(list.length()).toBe(2);
});

test("orderName", () => {
    list.addCtt("George", 12);
    list.addCtt("Dalania", 9);
    list.addCtt("yuri", 15);
    list.addCtt("eryk", 8);
    list.addCtt("luan", 8);
    list.addCtt("gustavo", 4);
    list.addCtt("diego", 10);
    list.addCtt("ana", 99);
    console.log((list.orderName()).toStringCtt());
});

test("orderAge", () => {
    list.addCtt("George", 12);
    list.addCtt("Dalania", 9);
    list.addCtt("yuri", 15);
    list.addCtt("eryk", 8);
    list.addCtt("luan", 8);
    list.addCtt("gustavo", 4);
    list.addCtt("diego", 10);
    list.addCtt("ana", 99);
    console.log((list.orderAge()).toStringCtt());
});