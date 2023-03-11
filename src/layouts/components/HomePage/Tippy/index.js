import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Tippy.module.scss';
import { Wrapper as PopperWrapper } from '../Tippy/AccountPrevieww';
import AccountRreview from '../AccountPreview';

const cx = classNames.bind(styles);

function ShowTippy() {
    const renderPreview = (props) => {
        return (
            <div className={cx('avatar')} tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountRreview />
                </PopperWrapper>
            </div>
        );
    };
    return (
        <div>
            <Tippy interactive delay={[500, 0]} placement="bottom" render={renderPreview}>
                <div>
                    <img
                        className={cx('avatar')}
                        src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1622483260657665.jpeg?x-expires=1678435200&x-signature=zttdhZTjNptn97pUivh7tGFBR2E%3D"
                        alt="avatar"
                    />
                </div>
            </Tippy>
        </div>
    );
}

export default ShowTippy;
