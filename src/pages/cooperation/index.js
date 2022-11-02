import { useCallback, useState, useEffect, useMemo } from 'react';
import { FormattedMessage as M, useIntl } from 'react-intl'
import axios from 'axios';
import classnames from 'classnames'

import { useLanguage } from 'context/language-context';

import styles from './index.module.css'

const HOST = 'https://www.luminesence.jp';

export default function Cooperation() {
  const [contact, setContact] = useState('');
  const [contactError, setContactError] = useState(undefined);
  const [feedback, setFeedback] = useState('');
  const [feedbackError, setFeedbackError] = useState(undefined);
  const [startValidate, setStartValidate] = useState(false);
  const intl = useIntl()
  const { language } = useLanguage()

  const validateValues = useCallback(() => {
    if (!contact) {
      setContactError(<M id="field.error.1" />);
    }
    if (!feedback) {
      setFeedbackError(<M id="field.error.2" />);
    }
    return !!contact && !!feedback
  }, [contact, feedback])

  useEffect(() => {
    if (startValidate) {
      validateValues()
    }
  }, [startValidate, validateValues])

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const isValid = validateValues();
    if (isValid) {
      setStartValidate(false);
      axios.post(`${HOST}/api/cooperation`, {
        contact,
        feedback,
      }).then((res) => {
        const { code } = res.data;
        if (code === 0) {
          setContact('')
          setFeedback('')
          alert(intl.formatMessage({ id: 'co.submitted' }))
        } else if (code === 100001) {
          alert('留言重复');
        }
      }).catch(err => {
        console.log('err', err);
      })
    } else {
      setStartValidate(true);
    }
  }, [contact, feedback, intl, validateValues])

  const handleInputChange = useCallback((e) => {
    if (contactError) setContactError(undefined);
    setContact(e.target.value);
  }, [contactError])

  const handleTextareaChange = useCallback((e) => {
    if (feedbackError) setFeedbackError(undefined);
    setFeedback(e.target.value)
  }, [feedbackError])

  const banner = useMemo(() => (
      <img src={`/images/${ language === 'ja-JP' ? 'ja-JP_co_banner.png' : 'zh-CN_co_banner.jpg' }`} alt="banner" className={styles.img} />
  ), [language])

  return (
    <div className={styles.container}>
      <section className={styles.banner}>
        {banner}
        <div className={styles.desContainer}>
          <span className={styles.title}>
            <M id="op.title" />
          </span>
          <br />
          <span className={classnames(styles.des, styles.des2, {[styles.desEn]: language === 'en-US'})}>
            <M id="op.des1" />
          </span>
          <span className={styles.des}>
            <M id="op.des2" />
          </span>
        </div>
      </section>
      <section className={styles.formContainer}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.field}>
            <div className={styles.label}><M id="field.1" /></div>
            <input
              value={contact}
              onChange={handleInputChange}
              className={styles.input}
              placeholder={intl.formatMessage({ id: 'field.1.placeholder' })}
            />
            <div className={styles.error}>{contactError}</div>
          </div>
          <div className={styles.field}>
            <div className={styles.label}><M id="field.2" /></div>
            <textarea
              value={feedback}
              name="feedback"
              onChange={handleTextareaChange}
              className={styles.textarea}
              rows={10}
              placeholder={intl.formatMessage({ id: 'field.2.placeholder' })}
            />
            <div className={styles.error}>{feedbackError}</div>
          </div>
          <button className={styles.submit} type="submit">
            <M id="submit" />
          </button>
        </form>
      </section>
    </div>
  )
}
