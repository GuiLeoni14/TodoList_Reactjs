import { ReactNode } from 'react';

import { ScrollView, ScrollBar, ScrollThumb, ScrollCorner, ScrollArea as ScrollRoot } from './styles';

export enum ETypeScrollArea {
    CARD_TASK = 'CARD_TASK',
    ALL_CARD_TASK = 'ALL_CARD_TASK',
}

interface ScrollAreaProps {
    children: ReactNode;
    typeScroll?: ETypeScrollArea;
}

function ScrollArea({ children, typeScroll }: ScrollAreaProps) {
    return (
        <>
            {typeScroll === ETypeScrollArea.CARD_TASK ? (
                <ScrollRoot className="card_task">
                    <ScrollView>{children}</ScrollView>
                    <ScrollBar orientation="vertical">
                        <ScrollThumb />
                    </ScrollBar>
                    <ScrollBar orientation="horizontal">
                        <ScrollThumb />
                    </ScrollBar>
                    <ScrollCorner />
                </ScrollRoot>
            ) : (
                <ScrollRoot>
                    <ScrollView>{children}</ScrollView>
                    <ScrollBar orientation="vertical">
                        <ScrollThumb />
                    </ScrollBar>
                    <ScrollBar orientation="horizontal">
                        <ScrollThumb />
                    </ScrollBar>
                    <ScrollCorner />
                </ScrollRoot>
            )}
        </>
    );
}

export default ScrollArea;
