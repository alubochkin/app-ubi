import { Suspense, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { AboutPageLazy, CounterPageLazy, MainPageLazy } from './pages//lazy.export';
import { useTheme } from './theme/useTheme';
import { cn } from './utils/helpers/classNames';

export const App = () => {
    const { theme, toggleTheme, checked } = useTheme();
    const [cls, setCls] = useState(false);

    return (
        <div onClick={() => setCls(!cls)} className={`app ${theme}`}>
            <input type="checkbox" checked={checked} onChange={toggleTheme} />
            {theme}
            <nav className={cn('nav', { someStyle: cls, anySomeCls: !cls }, ['ddd'])}>
                <Link to={'/'}>Main</Link>
                <Link to={'/about'}>About</Link>
                <Link to={'/counter'}>Counter</Link>
            </nav>
            <Suspense fallback={<div>Загрузка...</div>}>
                <Routes>
                    <Route path={'/'} element={<MainPageLazy />} />
                    <Route path={'/about'} element={<AboutPageLazy />} />
                    <Route path={'/counter'} element={<CounterPageLazy />} />
                </Routes>
            </Suspense>
        </div>
    );
};
