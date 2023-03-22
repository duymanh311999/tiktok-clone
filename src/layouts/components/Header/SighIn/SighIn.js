import { useState } from 'react';
import styles from './SighIn.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function SighIn() {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [error, setError] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSighup = (event) => {
        event.preventDefault();

        // Call API to authenticate user
        fetch('http://enjudev.com/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({
                name: name,
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

    function Alert() {
        const sighinName = document.getElementById('sighin-name');
        const sighinUsername = document.getElementById('sighin-username');
        const sighinPassword = document.getElementById('sighin-password');
        const sighinAlert = document.getElementById('sighin-alert');
        const patternEmail = /^([a-z0-9_.-]+)@([da-z.-]+).([a-z.]{2,6})$/;

        if (sighinName.value.length === 0 || sighinUsername.value.length === 0 || sighinPassword.value.length === 0) {
            sighinAlert.style.padding = '15px';
            sighinAlert.textContent = 'Vui lòng điền thông tin';
            sighinAlert.style.color = '#f01448';
            sighinAlert.style.fontSize = '15px';
            sighinAlert.style.fontWeight = '500';
        } else {
            if (sighinUsername.value.match(patternEmail)) {
                sighinAlert.style.padding = '15px';
                sighinAlert.textContent = 'Đăng ký thành công';
                sighinAlert.style.color = '#5255fa';
                sighinAlert.style.fontSize = '15px';
                sighinAlert.style.fontWeight = '500';
            } else {
                sighinAlert.style.padding = '15px';
                sighinAlert.textContent = 'Vui lòng điền địa chỉ Email hợp lệ';
                sighinAlert.style.color = '#f01448';
                sighinAlert.style.fontSize = '15px';
                sighinAlert.style.fontWeight = '500';
            }
        }
    }

    return (
        <div className={cx('sighin-form')}>
            <form className={cx('sighin-form-wrapper')} onSubmit={handleSighup}>
                <h1 className={cx('sighin-form-header')}>Đăng ký tài khoản</h1>
                <div className={cx('name-sighin-form')}>
                    <label>Username:</label>
                    <br />
                    <input
                        id="sighin-name"
                        className={cx('input-sighin-form')}
                        type="text"
                        value={name}
                        onChange={handleNameChange}
                    />
                </div>
                <div className={cx('email-sighin-form')}>
                    <label>Email:</label>
                    <br />
                    <input
                        id="sighin-username"
                        className={cx('input-sighin-form')}
                        type="text"
                        value={username}
                        onChange={handleUsernameChange}
                    />
                </div>
                <div className={cx('password-sighin-form')}>
                    <label>Password:</label>
                    <br />
                    <input
                        id="sighin-password"
                        className={cx('input-sighin-form')}
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>
                {errorMessage && <div>{errorMessage}</div>}
                <button className={cx('button-sighin-form')} type="submit" onClick={Alert}>
                    Đăng ký
                </button>
                <div id="sighin-alert" className={cx('alert-sighin-form')}></div>
            </form>
        </div>
    );
}

export default SighIn;
