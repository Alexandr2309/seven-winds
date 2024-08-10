import s from './headerControls.module.scss';
import AppsIcon from '@/z-shared/assets/apps.svg?react';
import ReplyIcon from '@/z-shared/assets/reply.svg?react';

export const HeaderControls = () => (
    <div className={s['container']}>
        <AppsIcon/>
        <ReplyIcon/>
    </div>
);
