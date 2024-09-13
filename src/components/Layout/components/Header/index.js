import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleXmark,
  faCloudArrowUp,
  faCoins,
  faEarthAsia,
  faEllipsisVertical,
  faGear,
  faKeyboard,
  faMagnifyingGlass,
  faMessage,
  faQuestionCircle,
  faSignOut,
  faSpinner,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { useState, useEffect } from 'react';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';


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
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 1000);
  }, []);

  const handleMenuChange = (menuItem) => {
    console.log(menuItem);
  };
 
 const userMenu = [
  {
    icon: <FontAwesomeIcon icon={faUser}/>,
    title: 'Xem hồ sơ'
  },
  {
    icon: <FontAwesomeIcon icon={faCoins}/>,
    title: 'Nhận xu'
  },
  {
    icon: <FontAwesomeIcon icon={faGear}/>,
    title: 'Cài đặt'
  },
  
  ...MENU_ITEMS,
  {
    icon: <FontAwesomeIcon icon={faSignOut}/>,
    title: 'Đăng xuất',
    separate: true,
  },

 ]  
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <img src={images.logo} alt="Tiktok"></img>

        <HeadlessTippy
          interactive
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h4 className={cx('search-title')}>Acounts</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx('search')}>
            <input placeholder="Search videos"></input>

            <button className={cx('clear')}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

            <button className={cx('search-btn')}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </HeadlessTippy>
        <div className={cx('actions')}>
          {currentUser ? (
            <div>
              <Tippy
              delay={[0, 200]}
             
              content="Upload video">
                <button className={cx('action-btn')}>
                  <FontAwesomeIcon icon={faCloudArrowUp} />
                </button>
              </Tippy>
              <Tippy content="Message">
                <button className={cx('action-btn')}>
                  <FontAwesomeIcon icon={faMessage} />
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
              <img
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
