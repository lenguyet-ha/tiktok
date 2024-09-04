import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import {Wrapper as PopperWrapper} from '~/components/Popper'
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { useState, useEffect } from 'react';
import AccountItem from '~/components/AccountItem';

const cx = classNames.bind(styles);

function Header() {
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1, 2, 3]);
    }, 1000);
  }, []);
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <img src={images.logo} alt="Tiktok"></img>

        <Tippy
          interactive
          visible={searchResult.length > 0}
          render={(attrs) => (
           
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
               <PopperWrapper>
           
                   <h4 className={cx('search-title')}>Acounts</h4>
                    <AccountItem/>
                    <AccountItem/>
                    <AccountItem/>
                    <AccountItem/>
               
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
        </Tippy>
        <div className={cx('actions')}></div>
      </div>
    </header>
  );
}

export default Header;
