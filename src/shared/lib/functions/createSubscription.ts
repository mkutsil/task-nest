export interface Subscription<T = void> {
    unsubscribe(f: (payload: T) => void): void;
    subscribe(f: (payload: T) => void): () => void;
    emit(payload: T): void;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createSubscription = <T = any>(): Subscription<T> => {
    const subscribers: Set<(payload: T) => void> = new Set();

    const unsubscribe: Subscription<T>['unsubscribe'] = f => {
        subscribers.delete(f);
    };

    const subscribe: Subscription<T>['subscribe'] = f => {
        subscribers.add(f);
        return () => unsubscribe(f);
    };

    const emit: Subscription<T>['emit'] = payload => {
        const snapshot = new Set(subscribers);

        snapshot.forEach(f => {
            try {
                f(payload);
            } catch (error) {
                console.warn(`Unable to activate subscriber`, error);
            }
        });
    };

    return { unsubscribe, subscribe, emit };
};

export default createSubscription;
