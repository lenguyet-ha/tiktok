import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '~/components/Image';
const cx = classNames.bind(styles);
function AccountItem() {
    return (
      <div className={cx('wrapper')}>
        <Image
          className={cx('avatar')}
          src="https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/4517e144de2801693522d187eebc2659.jpeg?lk3s=a5d48078&nonce=97817&refresh_token=55b1a66df81c21bf99946d9823dc375e&x-expires=1726214400&x-signature=0uONl9CFAmj1Rh45tT3hPRG2TJw%3D&shp=a5d48078&shcp=81f88b70"
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
