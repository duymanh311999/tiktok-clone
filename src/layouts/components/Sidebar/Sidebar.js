import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import {
    HomeIcon,
    HomeActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
    LiveIcon,
    LiveActiveIcon,
} from '~/components/Icons';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import config from '~/config';
import * as userService from '~/services/userService';
import * as userFollowing from '~/services/userFollowing';
import { useState, useEffect } from 'react';

const cx = classNames.bind(styles);

const INIT_PAGE = 1;
const PER_PAGE = 5;

const INIT_PAGE1 = 2;
const PER_PAGE1 = 5;

function Sidebar() {
    const [page, setPage] = useState(INIT_PAGE);
    const [suggestedUser, setSuggestedUser] = useState([]);

    useEffect(() => {
        userService
            .getSuggested({ page, perFollowing: PER_PAGE })
            .then((data) => {
                setSuggestedUser(() => [...data]);
            })
            .catch((error) => console.log(error));
    }, [page]);

    const handleSeeAll = () => {
        setPage(page + 1);
    };

    const [following, setfollowing] = useState(INIT_PAGE1);
    const [followingUser, setFollowingUser] = useState([]);

    useEffect(() => {
        userFollowing
            .getFollowing({ following, perFollowing: PER_PAGE1 })
            .then((data) => {
                setFollowingUser(() => [...data]);
            })
            .catch((error) => console.log(error));
    }, [following]);

    const handleSeeMore = () => {
        setfollowing(following + 1);
    };

    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>

            <SuggestedAccounts label="Suggested accounts" data={suggestedUser} onSeeAll={handleSeeAll} />
            <SuggestedAccounts label="Following accounts" data={followingUser} onSeeAll={handleSeeMore} />
        </aside>
    );
}

export default Sidebar;
