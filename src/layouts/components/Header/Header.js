import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowLeft,
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faSignOut,
    faUser,
    faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import SighIn from '~/layouts/components/Header/SighIn/SighIn';
import config from '~/config';
import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import MenuSighOut from '~/components/Popper/Menu/MenuSighOut';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';
import { useState } from 'react';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Español',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Filipino (Pilipinas)',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: '(עברית (ישראל',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Italiano (Italia)',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'မြန်မာ (မြန်မာ)',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'T한국어 (대한민국)',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Bahasa Melayu ',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Русский (Россия)',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Français',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Svenska (Sverige)',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'العربية',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Português (Brasil)',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: '日本語（日本）',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Polski (Polska)',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Deutsch',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const currentUser = true;

    // Handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle change language
                break;
            default:
        }
    };

    function logOut() {
        localStorage.removeItem('token');
        setToken('');
    }

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@hoaa',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: (
                <button className="button-sighout-form" onClick={logOut}>
                    Sign Out
                </button>
            ),
            separate: true,
        },
    ];

    const sighOutMenu = [
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/',
        },
        ...MENU_ITEMS,
    ];

    const [username, setUsername] = useState('enjudev@outlook.com');
    const [password, setPassword] = useState('enjudev');
    const [token, setToken] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [users, setUser] = useState([]);
    const [error, setError] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Call API to authenticate user
        fetch('http://enjudev.com/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({
                email: username,
                password: password,
            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.message) {
                    setError(responseJson);
                } else {
                    setToken(responseJson.token);
                    localStorage.setItem('token', responseJson.token);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    const [modal1, setModal1] = useState(false);

    const toggleModal1 = () => {
        setModal1(!modal1);
    };

    return (
        <>
            <header className={cx('wrapper')}>
                <div className={cx('inner')}>
                    <Link to={config.routes.home} className={cx('logo-link')}>
                        <img src={images.logo} alt="Tiktok" />
                    </Link>

                    <Search />

                    <div className={cx('actions')}>
                        {token ? (
                            <>
                                <Tippy delay={[0, 50]} content="Upload video" placement="bottom">
                                    <button className={cx('action-btn')}>
                                        <UploadIcon />
                                    </button>
                                </Tippy>
                                <Tippy delay={[0, 50]} content="Message" placement="bottom">
                                    <button className={cx('action-btn')}>
                                        <MessageIcon />
                                    </button>
                                </Tippy>
                                <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                                    <button className={cx('action-btn')}>
                                        <InboxIcon />
                                        <span className={cx('badge')}>1</span>
                                    </button>
                                </Tippy>
                            </>
                        ) : (
                            <>
                                <Button text>Upload</Button>
                                <Button className={cx('login-btn')} onClick={toggleModal} primary>
                                    Log in
                                </Button>

                                {modal && (
                                    <div className={cx('login-form')}>
                                        <form className={cx('login-form-wrapper')} onSubmit={handleSubmit}>
                                            <button className={cx('quit-btn')} onClick={toggleModal}>
                                                <FontAwesomeIcon icon={faXmark} />
                                            </button>
                                            <h1 className={cx('login-form-header')}>Đăng nhập</h1>
                                            <div className={cx('email-login-form')}>
                                                <label>Email:</label>
                                                <br />
                                                <input
                                                    id="username"
                                                    className={cx('input-login-form')}
                                                    type="text"
                                                    value={username}
                                                    onChange={handleUsernameChange}
                                                />
                                            </div>
                                            <div className={cx('password-login-form')}>
                                                <label>Password:</label>
                                                <br />
                                                <input
                                                    id="password"
                                                    className={cx('input-login-form')}
                                                    type="password"
                                                    value={password}
                                                    onChange={handlePasswordChange}
                                                />
                                            </div>
                                            {errorMessage && <div>{errorMessage}</div>}
                                            <button className={cx('button-login-form')} type="submit">
                                                Đăng nhập
                                            </button>
                                            <div id="alert" className={cx('alert-login-form')}>
                                                {error.message}
                                            </div>
                                        </form>
                                        <Button className={cx('sigh-btn')} onClick={toggleModal1}>
                                            Sigh in
                                        </Button>
                                    </div>
                                )}
                                {modal1 && (
                                    <div>
                                        <Button className={cx('sighin-quit-btn')} onClick={toggleModal1}>
                                            <FontAwesomeIcon icon={faArrowLeft} />
                                        </Button>{' '}
                                        <SighIn />{' '}
                                    </div>
                                )}
                            </>
                        )}

                        {token ? (
                            <Menu items={userMenu} onChange={handleMenuChange}>
                                <Image
                                    className={cx('user-avatar')}
                                    src="https://sohanews.sohacdn.com/thumb_w/660/160588918557773824/2021/4/1/11850233330799843287784612961548554554582625n-1617250209650450585182.jpg"
                                    alt="Tran duy Manh"
                                />
                            </Menu>
                        ) : (
                            <MenuSighOut items={sighOutMenu} onChange={handleMenuChange}>
                                <button className={cx('more-btn')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button>
                            </MenuSighOut>
                        )}
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
