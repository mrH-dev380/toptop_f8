import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { AiFillCloseCircle, AiOutlineLoading3Quarters, AiOutlinePlus } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';

import styles from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Header() {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setSearchResults([1, 2, 3]);
    }, 3000);
  }, []);

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={images.logo} alt="tiktok" />
        </div>
        <Tippy
          visible={searchResults.length > 0}
          interactive
          render={(attrs) => (
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h4 className={cx('search-title')}>Accounts</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx('search')}>
            <input placeholder="Tìm kiếm tài khoản và video" />
            <button className={cx('close')}>
              <AiFillCloseCircle className={cx('close-icon')} />
            </button>
            <AiOutlineLoading3Quarters className={cx('loading-icon')} />
            <button className={cx('search-btn')}>
              <BiSearch className={cx('search-icon')} />
            </button>
          </div>
        </Tippy>
        <div className={cx('actions')}>
          <Button normal leftIcon={<AiOutlinePlus />}>
            Tải lên
          </Button>
          <Button primary>Đăng nhập</Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
