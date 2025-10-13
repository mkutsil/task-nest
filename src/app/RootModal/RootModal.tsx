import { ModalNamesEnum } from '@/shared/enums/modalNames.enum';
import modalsMap from '@/shared/lib/functions/modalsMap';
import modalObserver from '@/shared/lib/observers/modalObserver';
import { useEffect, useState, memo, Suspense } from 'react';

const RootModal = () => {
    const [modalsForShow, setModalsForShow] = useState<typeof modalsMap>({} as typeof modalsMap);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handler = ({ key, props }: { key: ModalNamesEnum; props: any; isOpen: boolean }) => {
        if (props?.isOpen) {
            setModalsForShow(prev => ({ ...prev, [key]: { component: modalsMap[key], props } }));
        } else {
            setModalsForShow(prev => {
                const newState = { ...prev };
                delete newState[key];
                return newState;
            });
        }
    };
    useEffect(() => {
        modalObserver.subscribe(handler);

        return () => {
            modalObserver.unsubscribe(handler);
        };
    }, []);

    return (
        <>
            {Object.entries(modalsForShow)?.map(([key, { component: Component, props }]) => {
                if (!Component) {
                    return null;
                }

                return (
                    <Suspense key={key}>
                        <Component {...props} />
                    </Suspense>
                );
            })}
        </>
    );
};

export default memo(RootModal);
