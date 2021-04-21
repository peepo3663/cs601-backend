import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Info } from '.'

const app = () => express(apiRoot, routes)

let info

beforeEach(async () => {
  info = await Info.create({})
})

test('GET /infos 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /infos/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${info.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(info.id)
})

test('GET /infos/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
