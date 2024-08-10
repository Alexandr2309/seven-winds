import { AppTypography } from '@/z-shared/model/const';
import { HeaderControls } from '../headerControls/headerControls';
import s from './header.module.scss';
import clsx from 'clsx';

export const Header = () => (
    <div className={s['container']}>
        <HeaderControls/>
        <div className={s['links']}>
            {
                /* Правильно было бы создать компонент AppLink,
                ** но так как данная часть является статичной вёрсткой, акцент сделан на логике
                */
            }
            <button className={clsx(AppTypography.CAPTION, s['active-link'])}>
                Просмотр
            </button>
            <button className={AppTypography.CAPTION}>
                Управление
            </button>
        </div>
    </div>
);
