'use client'
import { Builder } from '@builder.io/react'
import { Button } from './stories/Button'
import Counter from './components/Counter/Counter'
import { Header } from './stories/Header'

Builder.registerComponent(Button, {
  name: 'Button',
  inputs: [
    {
      name: 'backgroundColor',
      type: 'string',
    },
    {
      name: 'label',
      type: 'string',
      required: true,
    },
    {
      name: 'onClick',
      type: 'string',
    },
    {
      name: 'primary',
      type: 'boolean',
    },
    {
      name: 'size',
      type: 'string',
    },
  ],
})

Builder.registerComponent(Header, {
  name: 'Header',
  inputs: [
    {
      name: 'onCreateAccount',
      type: 'string',
      required: true,
    },
    {
      name: 'onLogin',
      type: 'string',
      required: true,
    },
    {
      name: 'onLogout',
      type: 'string',
      required: true,
    },
    {
      name: 'user',
      type: 'string',
    },
  ],
})

Builder.registerComponent(Counter, {
  name: 'Counter',
  inputs: [
    {
      name: 'initialCount',
      type: 'number',
    },
  ],
})
