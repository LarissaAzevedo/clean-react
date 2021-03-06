import React, { memo } from 'react'
import { Logo } from '@/presentation/components'

import Styles from './login-header-styles.scss'

const LoginHeader = (): JSX.Element => {
  return (
    <header className={Styles.header}>
      <Logo />
      <h1>4Devs - Enquetes para Programadores</h1>
    </header>
  )
}

export default memo(LoginHeader)
