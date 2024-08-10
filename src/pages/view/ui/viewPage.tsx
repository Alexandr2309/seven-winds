import { AppTypography } from '@/z-shared/model/const';
import s from './viewPage.module.scss';
import clsx from 'clsx';

export const ViewPage = () => {
    const a = 1;

    return (
        <div className={s['container']}>
            <div className={s['head']}>
                <h1 className={clsx(AppTypography.TITLE, s['title'])}>
                    Строительные материалы
                </h1>
            </div>
        </div>
    );
};
