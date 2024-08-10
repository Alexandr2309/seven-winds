import { sectionsList } from '../../model/const/sections';
import { SidebarHeader } from '../sidebarHeader/sidebarHeader';
import { SidebarItem } from '../sidebarItem/sidebarItem';
import s from './sidebar.module.scss';

export const Sidebar = () => (
    <div className={s['container']}>
        <SidebarHeader/>
        <div className={s['list']}>
            {
                sectionsList.map(({ title, isActive }) => (
                    <SidebarItem
                        key={title}
                        text={title}
                        isActive={isActive}
                    />
                ))
            }
        </div>
    </div>
);
