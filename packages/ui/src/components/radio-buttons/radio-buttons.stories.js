/** @jsx h */
import { h } from 'preact'
import { useState } from 'preact/hooks'
import { RadioButtons } from './radio-buttons'
import { Text } from '../text/text'

export default { title: 'Radio Buttons' }

export const Default = function () {
  const [state, setState] = useState({ foo: null })
  return (
    <RadioButtons
      name='foo'
      value={state.foo}
      onChange={setState}
      options={[
        { value: 'foo', text: <Text>foo</Text> },
        { value: 'bar', text: <Text>bar</Text> },
        { value: 'baz', text: <Text>baz</Text> }
      ]}
    />
  )
}

export const Disabled = function () {
  const [state, setState] = useState({ foo: null })
  return (
    <RadioButtons
      disabled
      name='foo'
      value={state.foo}
      onChange={setState}
      options={[
        { value: 'foo', text: <Text>foo</Text> },
        { value: 'bar', text: <Text>bar</Text> },
        { value: 'baz', text: <Text>baz</Text> }
      ]}
    />
  )
}

export const WithSelectedOption = function () {
  const [state, setState] = useState({ foo: 'bar' })
  return (
    <RadioButtons
      name='foo'
      value={state.foo}
      onChange={setState}
      options={[
        { value: 'foo', text: <Text>foo</Text> },
        { value: 'bar', text: <Text>bar</Text> },
        { value: 'baz', text: <Text>baz</Text> }
      ]}
    />
  )
}

export const WithDisabledOption = function () {
  const [state, setState] = useState({ foo: null })
  return (
    <RadioButtons
      name='foo'
      value={state.foo}
      onChange={setState}
      options={[
        { value: 'foo', text: <Text>foo</Text> },
        { value: 'bar', text: <Text>bar</Text>, disabled: true },
        { value: 'baz', text: <Text>baz</Text> }
      ]}
    />
  )
}

export const WithDisabledSelectedOption = function () {
  const [state, setState] = useState({ foo: 'bar' })
  return (
    <RadioButtons
      name='foo'
      value={state.foo}
      onChange={setState}
      options={[
        { value: 'foo', text: <Text>foo</Text> },
        { value: 'bar', text: <Text>bar</Text>, disabled: true },
        { value: 'baz', text: <Text>baz</Text> }
      ]}
    />
  )
}
