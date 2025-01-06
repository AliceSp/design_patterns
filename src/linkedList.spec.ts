import { LinkedList, LinkedNode  } from './linkedList'

describe('LinkedList class', () => {
  it('list empty', () => {
    const list = new LinkedList();
    expect(list.head).toEqual(null);
    expect(list.tail).toEqual(null);
    expect(list.size).toEqual(0);
  })

  it('list with one node', () => {
    const list = new LinkedList();
    const node1 = new LinkedNode(4, null);
    list.prepend(node1);
    expect(list.head?.value).toEqual(4);
    expect(list.tail?.value).toEqual(4);
    expect(list.size).toEqual(1);
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
    expect(list.size).toEqual(2);
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

  it('list with no cycle', () => {
    const list = new LinkedList();
    const node1 = new LinkedNode(1, null);
    const node2 = new LinkedNode(2, null);
    const node3 = new LinkedNode(3, null);
    const node4 = new LinkedNode(4, null);

    list.append(node1);
    list.append(node2);
    list.append(node3);
    list.append(node4);

    expect(list.hasCycle()).toEqual(false);

  })

  it('list with cycle', () => {
    const list = new LinkedList();
    const node1 = new LinkedNode(1, null);
    const node2 = new LinkedNode(2, null);
    const node3 = new LinkedNode(3, null);
    const node4 = new LinkedNode(4, null);
    const node5 = new LinkedNode(5, null);
    const node6 = new LinkedNode(6, null);

    list.append(node1);
    list.append(node2);
    list.append(node3);
    list.append(node4);
    list.append(node3);

    expect(list.hasCycle()).toEqual(true);

  })

  it('list reverse', () => {
    const list = new LinkedList();
    const node1 = new LinkedNode(1, null);
    const node2 = new LinkedNode(2, null);
    const node3 = new LinkedNode(3, null);
    const node4 = new LinkedNode(4, null);

    list.append(node1);
    list.append(node2);
    list.append(node3);
    list.append(node4);
    list.reverse();

    expect(list.head?.value).toEqual(4);
    expect(list.tail?.value).toEqual(1);
  })

})
