import { memo, useMemo } from 'react'
import { FormattedMessage } from 'react-intl'

import styles from './index.module.css';

function Jd({ title, descriptions, demands, pluses, id, isLast }) {

  const desList = useMemo(() => {
    return descriptions?.map((item, idx) => (
      <div className={styles.item} key={idx}>{item}</div>
    ))
  }, [descriptions])

  const demandsList = useMemo(() => {
    return demands?.map((item, idx) => (
      <div className={styles.item} key={idx}>{item}</div>
    ))
  }, [demands])

  const plusList = useMemo(() => {
    return pluses?.map((item, idx) => (
      <div className={styles.item} key={idx}>{item}</div>
    ))
  }, [pluses])


  return (
    <div className={styles.container} id={id} style={isLast ? { borderBottom: 'none' } : null }>
      <div className={styles.title}>{title}</div>
      <div className={styles.desTitle}><FormattedMessage id="job.position.title" /></div>
      <div className={styles.listContainer}>
        {desList}
      </div>
      <div className={styles.desTitle}><FormattedMessage id="job.position.demand" /></div>
      <div className={styles.listContainer}>
        {demandsList}
      </div>
      {pluses && 
        <>
          <div className={styles.desTitle}><FormattedMessage id="job.position.extra" /></div>
          <div className={styles.listContainer}>
            {plusList}
          </div>
        </>
      }
      <div className={styles.buttonContainer}>
        <a className={styles.apply} href="mailto:recruit@luminesence.jp"><FormattedMessage id="job.button.apply" /></a>
      </div>
    </div>
  );
}

export default memo(Jd);
