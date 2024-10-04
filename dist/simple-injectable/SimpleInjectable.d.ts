interface IInjectable<InjectName = string> {
    readonly injectName: InjectName;
}
declare class SimpleInjectable<T extends IInjectable> {
    private injectListener;
    addInjectListener(listener: (injectable: T) => Promise<void>): void;
    removeInjectListener(listener: (injectable: T) => Promise<void>): void;
    onInjectable(injectable: T): Promise<void>;
}
export default SimpleInjectable;
export type { IInjectable };
