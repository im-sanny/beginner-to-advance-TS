// generic function
function inside<T>(value: T): T {
  return value;
}

// console.log(inside<string>('hello hi lol'));

// generic array
function getItems<T>(items: T[]): T[] {
  return items;
}
// console.log(getItems<number>([1, 2, 3]));
// console.log(getItems<string>(['Hi from array']));

// generic class
class Data1<T> {
  private _data: T;

  constructor(data: T) {
    this._data = data;
  }
  getData(): T {
    return this._data;
  }
  setData(_data: T) {
    this._data = _data;
  }
}
const dataHolder = new Data1<string>('hi from generic class');
// console.log(dataHolder.getData());
// dataHolder.setData('lets update');
// console.log(dataHolder.getData());

// Generic Constraints
interface HasLength {
  length: number;
}

function logLength<T extends HasLength>(item: T): void {
  console.log(`Length ${item.length}`);
}
logLength('hello form length function');
logLength([1, 2, 3]);
