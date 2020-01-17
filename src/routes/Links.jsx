/* eslint-disable react/jsx-props-no-spreading */
import React, { forwardRef } from 'react'
import { Link as RouterLink } from 'react-router-dom'

export const LinkCrapp = forwardRef((props, ref) => <RouterLink ref={ref} to='/crapp' {...props} />)

export const LinkReact = forwardRef((props, ref) => <RouterLink ref={ref} to='/react' {...props} />)

export const LinkRedux = forwardRef((props, ref) => <RouterLink ref={ref} to='/redux' {...props} />)

export const LinkPhoto = forwardRef((props, ref) => <RouterLink ref={ref} to='/photo' {...props} />)
