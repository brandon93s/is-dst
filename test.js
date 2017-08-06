import test from 'AVA'
import isDST from './index.js'
import timezoneMock from 'timezone-mock'

test('Timezone Supports DST -> January is not DST', t => {
  // mock timezone to EST
  timezoneMock.register('US/Eastern')

  const date = new Date('2017-01-01 12:00:00')
  const result = isDST(date)

  timezoneMock.unregister()
  t.is(result, false)
})

test('Timezone Supports DST -> July is DST', t => {
  // mock timezone to EST
  timezoneMock.register('US/Eastern')

  const date = new Date('2017-07-01 12:00:00')
  const result = isDST(date)

  timezoneMock.unregister()
  t.is(result, true)
})

test('Timezone Does Not Support DST -> January is not DST', t => {
  // mock timezone to UTC
  timezoneMock.register('UTC')

  const date = new Date('2017-01-01 12:00:00')
  const result = isDST(date)

  timezoneMock.unregister()
  t.is(result, false)
})

test('Timezone Does Not Support DST -> July is not DST', t => {
  // mock timezone to UTC
  timezoneMock.register('UTC')

  const date = new Date('2017-07-01 12:00:00')
  const result = isDST(date)

  timezoneMock.unregister()
  t.is(result, false)
})

test('Handles undefined uninput', t => {
  t.notThrows(() => {
    isDST()
  })
})

test('Throws on unexpected input', t => {
  t.throws(() => {
    isDST(5)
  })

  t.throws(() => {
    isDST([])
  })

  t.throws(() => {
    isDST({})
  })

  t.throws(() => {
    isDST('throw')
  })
})
