interface IInjectable<T, InjectName = string> {
    readonly injectName: InjectName;
    data: T;
}
type InjectionListener<T> = (injectable: T) => Promise<void>;
declare class SimpleInjectable<T> {
    private injectListener;
    addInjectionListener(listener: InjectionListener<T>): void;
    removeInjectionListener(listener: InjectionListener<T>): void;
    onInjection(injectable: T): Promise<void>;
}
export default SimpleInjectable;
export type { IInjectable, InjectionListener };
