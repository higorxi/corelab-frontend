import React from 'react'
import { HsvaColor, ColorResult } from '@uiw/color-convert'
import { SwatchProps } from '@uiw/react-color-swatch'

const Circle = React.forwardRef(function Circle(props, ref) {
  const { color, onChange, ...rest } = props

  return (
    <div {...rest} ref={ref}>
      {/* O conteúdo do componente Circle aqui */}
    </div>
  )
})

export default Circle
