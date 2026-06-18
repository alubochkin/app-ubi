import { lazy } from 'react';

// Функция для создания ленивого компонента с задержкой
const lazyWithDelay = <T extends React.ComponentType<any>>(importFunc: () => Promise<{ default: T }>, delayMs: number = 1000) => {
    return lazy(
        () =>
            new Promise<{ default: T }>((resolve) => {
                setTimeout(() => {
                    resolve(importFunc() as any);
                }, delayMs);
            })
    );
};

export const AboutPageLazy = lazyWithDelay(() => import('./AboutPage'), 1600);
export const MainPageLazy = lazyWithDelay(() => import('./MainPage'), 1600);
export const CounterPageLazy = lazyWithDelay(() => import('./CounterPage'), 1600);
