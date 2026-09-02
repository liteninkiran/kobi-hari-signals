export type MySignal<T> = () => T;

export type Updater<T> = (value: T) => T;

export type MyWriteableSignal<T> = MySignal<T> & {
  set(value: T): void;
  update(updater: Updater<T>): void;
};

export function mySignal<T>(value: T): MyWriteableSignal<T> {
  const result = () => value;

  result.set = (newValue: T) => {
    value = newValue;
  };

  result.update = (updater: Updater<T>) => {
    value = updater(value);
  };

  return result;
}
