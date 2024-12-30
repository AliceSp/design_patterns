import { LinkedList, LinkedNode  } from './linkedList'

describe('LinkedList class', () => {
  it('list empty', () => {
    const list = new LinkedList();
    expect(list.head).toEqual(null);
    expect(list.tail).toEqual(null);
  })

  it('list with one node', () => {
    const list = new LinkedList();
    const node1 = new LinkedNode(4, null);
    list.prepend(node1);
    expect(list.head?.value).toEqual(4);
    expect(list.tail?.value).toEqual(4);
  })

  it('list with two nodes', () => {
    const list = new LinkedList();
    const node1 = new LinkedNode(4, null);
    const node2 = new LinkedNode(5, null);

    list.prepend(node1);
    list.prepend(node2);
    expect(list.head?.value).toEqual(5);
    expect(list.head?.next?.value).toEqual(4);
    expect(list.tail?.value).toEqual(4);
  })

  it('list with two nodes', () => {
    const list = new LinkedList();
    const node1 = new LinkedNode(4, null);
    const node2 = new LinkedNode(5, null);

    list.append(node1);
    list.append(node2);
    expect(list.head?.value).toEqual(4);
    expect(list.head?.next?.value).toEqual(5);
    expect(list.tail?.value).toEqual(5);

    list.delete(node1);
    expect(list.head?.value).toEqual(5);
    expect(list.head?.next).toEqual(null);

  })

})
