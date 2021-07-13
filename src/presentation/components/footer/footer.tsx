import React, { memo } from 'react'
import Styles from './footer-styles.scss'

const Footer = (): JSX.Element => {
  return <footer className={Styles.footer} />
}

export default memo(Footer)
