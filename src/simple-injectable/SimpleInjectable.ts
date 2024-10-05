interface IInjectable<T, InjectName = string> {
  readonly injectName: InjectName;
  data: T;
}
type InjectionListener<T> = (injectable: T) => Promise<void>;
class SimpleInjectable<T> {
  private injectListener: InjectionListener<T>[] = [];
  addInjectionListener(listener: InjectionListener<T>) {
    this.injectListener.push(listener);
  }
  removeInjectionListener(listener: InjectionListener<T>) {
    this.injectListener = this.injectListener.filter((l) => l !== listener);
  }
  async onInjection(injectable: T) {
    for (const listener of this.injectListener) {
      await listener(injectable);
    }
  }
}

export default SimpleInjectable;
export type { IInjectable, InjectionListener };
