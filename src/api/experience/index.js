import { Router } from 'express'
import { index } from './controller'

const router = new Router()

/**
 * @api {get} /experiences Retrieve experiences
 * @apiName RetrieveExperiences
 * @apiGroup Experience
 * @apiUse listParams
 * @apiSuccess {Object[]} experiences List of experiences.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/', index)

export default router
