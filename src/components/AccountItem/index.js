import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
      <div className={cx('wrapper')}>
        <img
          className={cx('avatar')}
          src="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/86d6ba632b8ad479ac8eecb1cc518744.jpeg?lk3s=a5d48078&nonce=8382&refresh_token=8a550cff0a0814e018b4f61f087cfefc&x-expires=1725613200&x-signature=vKU8viz5rGNoBDx1THEvChNJDd4%3D&shp=a5d48078&shcp=81f88b70"
          alt="dd"
        />
        <div className={cx('info')}>
          <h4 className={cx('name')}>
            <span>Nguyen Van A</span>
            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
          </h4>
          <span className={cx('username')}>nguyenvana</span>
        </div>
      </div>
    );
 
}

export default AccountItem;
