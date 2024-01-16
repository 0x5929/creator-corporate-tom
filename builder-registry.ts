'use client'
import { Builder } from '@builder.io/react'
import { Button } from './stories/Button'
import Counter from './components/Counter/Counter'

Builder.registerComponent(Counter, {
  name: 'Counter',
  inputs: [
    {
      name: 'initialCount',
      type: 'number',
    },
  ],
})

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
