import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCoins,
  faEarthAsia,
  faEllipsisVertical,
  faGear,
  faKeyboard,
  faQuestionCircle,
  faSignOut,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { UploadIcon, MessageIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '~/components/Layout/components/Search';

const cx = classNames.bind(styles);
const currentUser = true;
const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: 'Tiếng việt',
    children: {
      title: 'Ngôn ngữ',
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
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faQuestionCircle} />,
    title: 'Phản hồi và trợ giúp',
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Phím tắt bàn phím',
  },
];

function Header() {
  const handleMenuChange = (menuItem) => {
    console.log(menuItem);
  };

  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,

      title: 'Xem hồ sơ',
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: 'Nhận xu',
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: 'Cài đặt',
    },

    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: 'Đăng xuất',
      separate: true,
    },
  ];
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <img src={images.logo} alt="Tiktok"></img>
        <Search />
        {/* Search */}
        <div className={cx('actions')}>
          {currentUser ? (
            <div>
              <Tippy delay={[0, 200]} content="Upload video">
                <button className={cx('action-btn-upload')}>
                  <UploadIcon />
                </button>
              </Tippy>
              <Tippy content="Message">
                <button className={cx('action-btn')}>
                  <MessageIcon />
                </button>
              </Tippy>
            </div>
          ) : (
            <div>
              <Button text>Upload</Button>

              <Button primary>Log in</Button>
            </div>
          )}

          <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
            {currentUser ? (
              <Image
                fallBack="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7355579081386704901~c5_720x720.jpeg?lk3s=a5d48078&nonce=55832&refresh_token=bd1baa119a549c63db044f61088b2248&x-expires=1726452000&x-signature=L9rZrM6eBYSAA28f2gByBqgSJ1U%3D&shp=a5d48078&shcp=81f88b70"
                className={cx('user-avatar')}
                alt="Nguyen Van A"
                src="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/8fadbe74fd9d83d7ed4f3164ab159439.jpeg?lk3s=a5d48078&nonce=59237&refresh_token=3b47f1fbef82fa3465fba5a9548901f1&x-expires=1726365600&x-signature=hOY4iFI97EZdivonytBnyv%2FhCW8%3D&shp=a5d48078&shcp=81f88b70"
              />
            ) : (
              <button className={cx('more-btn')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
