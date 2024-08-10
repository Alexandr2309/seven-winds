import { Suspense } from 'react';
import './styles/global.scss';
import { Header } from '@/widgets/header';
import { Sidebar } from '@/widgets/sidebar';
import { ViewPage } from '@/pages/view';

export const App = () => (
    <Suspense fallback={<div>Loading...</div>}>
        <main className={'app'}>
            <Header/>
            <div className={'layout'}>
                <Sidebar/>
                <ViewPage/>
            </div>
        </main>
    </Suspense>
);
