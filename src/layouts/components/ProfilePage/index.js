import classNames from 'classnames/bind';
import styles from './ProfilePage.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faLink, faLock } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function ProfilePage() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('name-avatar')}>
                <img
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/05aa222706c452c8ad0ea7d2e719a745~c5_100x100.jpeg?x-expires=1678543200&x-signature=ITHYNKTnQdeOcK%2BIebCrSBgInXw%3D"
                    alt="avatar"
                    className={cx('avatar')}
                />
                <div className={cx('nickname-btn')}>
                    <div className={cx('nickname')}>
                        <strong>hoaa.hanassii</strong>
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                    </div>
                    <div className={cx('fullname')}>Đào Lê Phương Hoa</div>
                    <button className={cx('btn')}>Follow</button>
                </div>
            </div>

            <div className={cx('follow')}>
                <p className={cx('following')}>
                    <span>123 </span>Following{' '}
                </p>
                <p className={cx('follower')}>
                    <span>13.9M </span>Follower{' '}
                </p>
                <p className={cx('like')}>
                    <span>347.6M </span>Like{' '}
                </p>
            </div>

            <div className={cx('detail')}>
                <div className={cx('content')}>✨ 1998 ✨ Vietnam 🇻🇳 KHÔNG CÓ NICK PHỤ</div>
                <div className={cx('link')}>
                    <FontAwesomeIcon className={cx('icon')} icon={faLink} />
                    https://www.facebook.com/hoaa.hanassi
                </div>
            </div>
            <div className={cx('video-list')}>
                <p className={cx('video')}>Video</p>
                <p className={cx('liked')}>
                    <FontAwesomeIcon className={cx('icon')} icon={faLock} />
                    Liked
                </p>
            </div>
        </div>
    );
}

export default ProfilePage;
