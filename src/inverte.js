export default function reverse(list) {
    for(let i = 0; i < list.length(); i++) {
        list.addAt(i,list.removeLast());
    }
    return list;
}