import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { BsCheckCircleFill } from 'react-icons/bs';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('img')}
        src="https://upload.wikimedia.org/wikipedia/vi/a/a7/Paris_Saint-Germain_F.C..svg"
        alt=""
      />
      <div className={cx('info')}>
        <p>
          <span className={cx('username')}>psg</span>
          <BsCheckCircleFill className={cx('check-icon')} />
        </p>
        <span className={cx('name')}>psg</span>
      </div>
    </div>
  );
}

export default AccountItem;
