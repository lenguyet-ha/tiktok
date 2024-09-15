import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import HeadlessTippy from '@tippyjs/react/headless';
import AccountItem from '~/components/AccountItem';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { useState, useEffect, useRef } from 'react';
import { SearchIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showResult, setShowResult] = useState(true)
  const inputRef = useRef();

  useEffect(() => {
    if (searchValue) {
      setLoading(true);

      const timer = setTimeout(() => {
        setLoading(false);
        setSearchResult([1]);
      }, 200);
      return () => clearTimeout(timer)  // clean up function
    } else {
      setSearchResult([]);
    }
  }, [searchValue]);

  return (
    <HeadlessTippy
      interactive
      visible={ showResult && searchResult.length > 0}
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
      onClickOutside={()=>{setShowResult(false)}}
  
    >
      <div className={cx('search')}>
        <input
          ref={inputRef}
          value={searchValue}
          placeholder="Search videos"
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          onFocus={()=>{setShowResult(true)}}
        ></input>

        {loading ? (
          <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
        ) : searchValue ? (
          <button
            className={cx('clear')}
            onClick={() => {
              setSearchValue('');
              inputRef.current.focus();
            }}
          >
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        ) : null}

        <button className={cx('search-btn')}>
          <SearchIcon />
        </button>
      </div>
    </HeadlessTippy>
  );
}

export default Search;
