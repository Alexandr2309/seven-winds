import { AppTypography } from '@/z-shared/model/const';
import s from './sidebarItem.module.scss';
import DefaultIcon from '@/z-shared/assets/default.svg?react';
import clsx from 'clsx';

interface SidebarItemProps {
    text: string;
    isActive?: boolean;
}

export const SidebarItem = ({ text, isActive }: SidebarItemProps) => (
    <div className={clsx(s['container'], isActive && s['active'])}>
        <div className={s['content']}>
            <DefaultIcon/>
            <span className={AppTypography.CAPTION}>
                {text}
            </span>
        </div>
    </div>
);
