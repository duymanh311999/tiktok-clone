import classNames from 'classnames/bind';
import styles from '../HomePage/HomePage.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCommentDots, faHeart, faMusic, faShareAlt } from '@fortawesome/free-solid-svg-icons';

import ShowTippy from '../HomePage/Tippy';

const cx = classNames.bind(styles);

function FollowingPage() {
    function FollowingButton() {
        const following = document.getElementById('following').value;
        const followingStyle = document.getElementById('following');
        if (following === 'Follow') {
            document.getElementById('following').value = 'Unfollow';
            followingStyle.style.color = '#333';
            followingStyle.style.borderColor = 'rgba(22, 24, 35, 0.12)';
        } else {
            document.getElementById('following').value = 'Follow';
            followingStyle.style.color = 'red';
            followingStyle.style.borderColor = 'red';
        }
    }

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

                    <input
                        className={cx('btn')}
                        type="button"
                        value="Follow"
                        id="following"
                        onClick={FollowingButton}
                    />
                </div>

                <div className={cx('botton-item')}>
                    <div className={cx('item-video')}>
                        <video src="/videos/tải xuống.mp4" autoPlay loop muted />
                    </div>
                    <div className={cx('item-icon')}>
                        <div className={cx('icon-text')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faHeart} />
                            <div className={cx('text')}>672.5k</div>
                        </div>
                        <div className={cx('icon-text')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faCommentDots} />
                            <div className={cx('text')}>5058</div>
                        </div>
                        <div className={cx('icon-text')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faShareAlt} />
                            <div className={cx('text')}>1161</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FollowingPage;
