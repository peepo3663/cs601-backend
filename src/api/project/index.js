import { Router } from 'express'
import { index } from './controller'

const router = new Router()

/**
 * @api {get} /projects Retrieve projects
 * @apiName RetrieveProjects
 * @apiGroup Project
 * @apiUse listParams
 * @apiSuccess {Object[]} projects List of projects.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/', index)

export default router
