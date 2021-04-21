import * as express from 'express'
import { index, show } from './controller'

const router = new express.Router()

/**
 * @api {get} /infos Retrieve infos
 * @apiName RetrieveInfos
 * @apiGroup Info
 * @apiUse listParams
 * @apiSuccess {Object[]} infos List of infos.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/', index)

/**
 * @api {get} /infos/:id Retrieve info
 * @apiName RetrieveInfo
 * @apiGroup Info
 * @apiSuccess {Object} info Info's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Info not found.
 */
router.get('/:id', show)

export default router
