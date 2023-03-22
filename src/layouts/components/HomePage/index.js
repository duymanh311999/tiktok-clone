import classNames from 'classnames/bind';
import styles from './HomePage.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCommentDots, faHeart, faMusic, faShareAlt } from '@fortawesome/free-solid-svg-icons';

import ShowTippy from './Tippy';

const cx = classNames.bind(styles);

function HomePage() {
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

            <div className={cx('item')}>
                <div className={cx('header')}>
                    <div>
                        <img
                            className={cx('avatar')}
                            src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/11b9f5fb37672d838064b90d600a9550.jpeg?x-expires=1678442400&x-signature=J5QX9lFUpJwLvyh5%2B4%2FXzeLD50I%3D"
                            alt="avatar"
                        />
                    </div>
                    <div className={cx('item-text')}>
                        <div className={cx('item-name')}>
                            <strong className={cx('nickname')}>tunnmai</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                            <p className={cx('fullname')}>Mai Tunn</p>
                        </div>
                        <div className={cx('content')}>
                            Có ai 34 ở đây không ạ<span className={cx('hashtag')}>#dcgroup #dcgr #CapCut</span>
                        </div>
                        <div className={cx('music')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faMusic} />
                            Phận Tàn Rabbit Remix - 1995MIX
                        </div>
                    </div>
                    <button className={cx('btn')}>Follow</button>
                </div>

                <div className={cx('botton-item')}>
                    <div className={cx('item-video')}>
                        <video src="/videos/tải xuống (1).mp4" autoPlay loop muted />
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

            <div className={cx('item')}>
                <div className={cx('header')}>
                    <div>
                        <img
                            className={cx('avatar')}
                            src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/219e56290d96b5c4dae4c7750fb94a5b~c5_100x100.jpeg?x-expires=1678442400&x-signature=VXscpZP080l9%2BjtM%2BOuuR5zaTGo%3D"
                            alt="avatar"
                        />
                    </div>

                    <div className={cx('item-text')}>
                        <div className={cx('item-name')}>
                            <strong className={cx('nickname')}>cciinnn</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                            <p className={cx('fullname')}>CiiN</p>
                        </div>
                        <div className={cx('content')}>
                            Nữ hoàng chơi trend trễ 😚😆😆 yahhh cảm ơn team anh @Tuấn Ngọc Võ rất nhiều ạhhh ♥️♥️
                            IB:@Quỳnh Thi
                            <span className={cx('hashtag')}>#madeyoulook #GiangSinh2022</span>
                        </div>
                        <div className={cx('music')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faMusic} />
                            Made You Look - Meghan Trainor
                        </div>
                    </div>
                    <button className={cx('btn')}>Follow</button>
                </div>

                <div className={cx('botton-item')}>
                    <div className={cx('item-video')}>
                        <video src="/videos/tải xuống (2).mp4" autoPlay loop muted />
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

export default HomePage;
