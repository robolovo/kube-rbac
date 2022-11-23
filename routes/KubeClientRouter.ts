import { Router } from 'express'
import CoreApiController from '../controller/CoreApiController'
import RbacApiController from '../controller/RbacApiController'

class KubeClientRouter {
    public router = Router()
    private coreApiController = new CoreApiController()
    private rbacApiController = new RbacApiController()

    public constructor() {
        this.initializeRoutes()
    }

    private initializeRoutes() {
        this.router.route('/serviceaccounts').post(this.coreApiController.createServiceAccount)

        this.router.route('/roles').post(this.rbacApiController.createRole)
        this.router.route('/clusterroles').post(this.rbacApiController.createClusterRole)
        this.router.route('/rolebindings').post(this.rbacApiController.createRoleBinding)
        this.router.route('/clusterrolebindings').post(this.rbacApiController.createClusterRoleBinding)
    }
}

export default new KubeClientRouter().router