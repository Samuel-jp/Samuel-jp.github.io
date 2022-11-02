import { useCallback, useRef, useState, useEffect, memo } from 'react';
// import { FormattedMessage } from 'react-intl';
import { useLanguage } from 'context/language-context';
import classnames from 'classnames';

import styles from './index.module.css';

const LanguageMap = {
  'en-US': 'English',
  'zh-CN': '简体中文',
  'ja-JP': '日本語',
};

const gap = 0;
const marginLimit = 200;

function SelectLanguage({ style, menuVisible, setMenuVisible }) {
  const { language, changeLanguage } = useLanguage();
  const [positions, setPositions] = useState({});
  const [visible, setVisible] = useState(false);
  const [direction, setDirection] = useState('bottom');
  const ref = useRef();

  const handleChange = useCallback(
    (lang) => () => {
      changeLanguage(lang);
    },
    [changeLanguage]
  );

  useEffect(() => {
    if(visible && menuVisible && setMenuVisible && typeof setMenuVisible === 'function') {
      setMenuVisible(false)
    }
  }, [menuVisible, setMenuVisible, visible])

  useEffect(() => {
    const top = ref.current.offsetTop;
    const bottom = document.body.offsetHeight - ref.current.offsetTop;
    setPositions({
      top,
      bottom,
      height: ref.current.clientHeight,
    });

    if (top < marginLimit) setDirection('top');
    if (bottom < marginLimit) setDirection('bottom');

    const handler = () => {
      setVisible(false);
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  const handleLanguageClicked = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setVisible(true);
  }, []);

  return (
    <div className={styles.container} ref={ref}>
      {/* <span className={styles.title}>
        <FormattedMessage id='language' />
      </span> */}
      <div
        className={styles.select}
        // onChange={handleChange}
        onClick={handleLanguageClicked}
        value={language}
        style={style}
      >
        {LanguageMap[language]}
        <img src='icons/select.svg' alt='select' width={16} height={16} />
      </div>
      <div
        className={classnames(styles.listContainer, {
          [styles.visible]: visible,
        })}
        style={{ [direction]: positions.height + gap || 0 }}
      >
        <div className={styles.li} onClick={handleChange('en-US')}>
          English
        </div>
        <div className={styles.li} onClick={handleChange('zh-CN')}>
          简体中文
        </div>
        <div className={styles.li} onClick={handleChange('ja-JP')}>
          日本語
        </div>
      </div>
    </div>
  );
}

export default memo(SelectLanguage);
