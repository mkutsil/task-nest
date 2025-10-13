import type { ComponentType } from 'react';

const NUMBER_OF_ATTEMPTS = 5;
const RETRY_TIMEOUT = 1.5 * 1000;

export const componentLoader = (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    lazyComponent: () => any,
    attemptsLeft = NUMBER_OF_ATTEMPTS,
    retryTimeout = RETRY_TIMEOUT
) =>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    new Promise<{ default: ComponentType<any> }>((resolve, reject) => {
        lazyComponent()
            .then(resolve)
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .catch((error: any) => {
                setTimeout(() => {
                    if (attemptsLeft === 1) {
                        reject(error);
                        return;
                    }
                    componentLoader(lazyComponent, attemptsLeft - 1).then(resolve, reject);
                }, retryTimeout);
            });
    });
