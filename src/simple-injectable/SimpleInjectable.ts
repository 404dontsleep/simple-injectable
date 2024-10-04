interface IInjectable<InjectName = string> {
  readonly injectName: InjectName;
}

class SimpleInjectable<T extends IInjectable> {
  private injectListener: Array<(injectable: T) => Promise<void>> = [];
  addInjectListener(listener: (injectable: T) => Promise<void>) {
    this.injectListener.push(listener);
  }
  removeInjectListener(listener: (injectable: T) => Promise<void>) {
    this.injectListener = this.injectListener.filter((l) => l !== listener);
  }
  async onInjectable(injectable: T): Promise<void> {
    for (const listener of this.injectListener) {
      await listener(injectable);
    }
  }
}

export default SimpleInjectable;
export type { IInjectable };
