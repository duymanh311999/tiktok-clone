import classNames from 'classnames/bind';
import styles from '../HomePage/HomePage.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faMusic } from '@fortawesome/free-solid-svg-icons';

import ShowTippy from '../HomePage/Tippy';

const cx = classNames.bind(styles);

function FollowingPage() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('item')}>
                <div className={cx('header')}>
                    <ShowTippy />
                    <div className={cx('item-text')}>
                        <div className={cx('item-name')}>
                            <strong className={cx('nickname')}>ducphucofficial</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                            <p className={cx('fullname')}>ĐỨC PHÚC</p>
                        </div>
                        <div className={cx('content')}>
                            EM ĐỒNG Ý ( I DO) - ĐỨC PHÚC x 911 x KHẮC HƯNG | 1ST LIVE STAGE
                            <span className={cx('hashtag')}>
                                #emdongy #emđồngý #Ido #911 #ducphuc #khachung #valentine #valentine2023
                            </span>
                        </div>
                        <div className={cx('music')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faMusic} />
                            Em Dong Y (I Do) - Đức Phúc & 911
                        </div>
                    </div>

                    <button className={cx('btn')}>Follow</button>
                </div>

                <div className={cx('item-video')}></div>
            </div>
        </div>
    );
}

export default FollowingPage;
