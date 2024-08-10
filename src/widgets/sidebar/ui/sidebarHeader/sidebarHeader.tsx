import { AppTypography } from '@/z-shared/model/const';
import s from './sidebarHeader.module.scss';
import ArrowDown from '@/z-shared/assets/arrow_down.svg?react';

export const SidebarHeader = () => (
    <div className={s['container']}>
        <div className={s['content']}>
            <div className={s['text']}>
                <h5 className={AppTypography.CAPTION}>
                    Название проекта
                </h5>
                <p className={AppTypography.CAPTION_MINI}>
                    Аббревиатура
                </p>
            </div>
        </div>
        <ArrowDown/>
    </div>
);
