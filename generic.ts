// Generic function: Returns the value passed to it
function inside<T>(value: T): T {
  return value;
}

// console.log(inside<string>('hello hi lol'));

// Generic array function: Returns an array of the same type
function getItems<T>(items: T[]): T[] {
  return items;
}
// console.log(getItems<number>([1, 2, 3]));
// console.log(getItems<string>(['Hi from array']));

// Generic class: Holds data of any type with getter and setter
class DataHolder2<T> {
  private _data: T;

  constructor(data: T) {
    this._data = data;
  }

  // Method to get the stored data
  getData(): T {
    return this._data;
  }

  // Method to set new data
  setData(newData: T) {
    this._data = newData;
  }
}

const dataHolder = new DataHolder<string>('hi from generic class');
// console.log(dataHolder.getData());
// dataHolder.setData('lets update');
// console.log(dataHolder.getData());

// Generic Constraints: Interface requiring a length property
interface HasLength {
  length: number;
}

// Function to log the length of an item
function logLength<T extends HasLength>(item: T): void {
  // console.log(`Length: ${item.length}`);
}

logLength('hello from length function');
logLength([1, 2, 3]);

// Keyof with generics: Function to get a property from an object
function holdProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user1 = { id: 2, name: 'User 2' };
// console.log(user1);

// Generic utility types: Defining various utility types for Todo interface
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type PartialTodo = Partial<Todo>; // All properties are optional
type ReadonlyTodo = Readonly<Todo>; // All properties are read-only
type PickTodo = Pick<Todo, 'title' | 'completed'>; // Only title and completed properties
type OmitTodo = Omit<Todo, 'description'>; // All properties except description
