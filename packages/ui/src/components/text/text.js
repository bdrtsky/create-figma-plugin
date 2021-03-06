/** @jsx h */
import classnames from '@sindresorhus/class-names'
import { h } from 'preact'
import '../../scss/base.scss'
import styles from './text.scss'

export function Text ({
  align = 'left',
  bold: isBold,
  muted: isMuted,
  numeric: isNumeric,
  ...rest
}) {
  return (
    <div
      {...rest}
      class={classnames(
        styles.text,
        styles[align],
        isBold === true ? styles.isBold : null,
        isMuted === true ? styles.isMuted : null,
        isNumeric === true ? styles.isNumeric : null
      )}
    />
  )
}
