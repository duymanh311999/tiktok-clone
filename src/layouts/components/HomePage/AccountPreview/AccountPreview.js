import classNames from 'classnames/bind';
import Button from '../../../../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountPreview.module.scss';

const cx = classNames.bind(styles);

function AccountRreview() {
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
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1622483260657665.jpeg?x-expires=1678435200&x-signature=zttdhZTjNptn97pUivh7tGFBR2E%3D"
                    alt="avatar"
                />
                <input
                    className={cx('follow-btn')}
                    type="button"
                    value="Follow"
                    id="following"
                    onClick={FollowingButton}
                />
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>ducphucofficial</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>ĐỨC PHÚC</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>5M </strong>
                    <span className={cx('label')}>Following</span>
                    <strong className={cx('value')}>200M </strong>
                    <span className={cx('label')}>Like</span>
                </p>
                <p className={cx('profile')}>IG : nguyenducphuc_ FB : Nguyễn Đức Phúc ▶️: ĐỨC PHÚC OFFICIAL</p>
            </div>
        </div>
    );
}

export default AccountRreview;
