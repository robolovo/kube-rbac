import { Request, Response } from 'express'
import { KubeApiClient } from '../config/KubeApiClient'
import { Role } from '../k8s/Role'
import { ClusterRole } from '../k8s/ClusterRole'
import { 
    RoleCreateRequest, 
    RoleBindingCreateRequest, 
    ClusterRoleCreateRequest, 
    ClusterRoleBindingCreateRequest 
} from './dto/rbacCreateRequests'

export default class RbacApiController {
    public constructor() {}

    public async createRole(req: Request, res: Response) {
        const dto: RoleCreateRequest = RoleCreateRequest.toDto(req.body)

        await KubeApiClient.rbacAuthorizationV1Api
            .createNamespacedRole(dto.namespace, Role.getRole(dto))

        res.status(201).send({ success: true })
    }

    public async createClusterRole(req: Request, res: Response) {
        const dto: ClusterRoleCreateRequest = ClusterRoleCreateRequest.toDto(req.body)

        await KubeApiClient.rbacAuthorizationV1Api
            .createClusterRole(ClusterRole.getClusterRole(dto))

        res.status(201).send({ success: true })
    }

    public async createRoleBinding(req: Request, res: Response) {
        const dto: RoleBindingCreateRequest = RoleBindingCreateRequest.toDto(req.body)
        
        await KubeApiClient.rbacAuthorizationV1Api
            .createNamespacedRoleBinding(dto.namespace, Role.getRoleBinding(dto))

        res.status(201).send({ success: true })
    }

    public async createClusterRoleBinding(req: Request, res: Response) {
        const dto: ClusterRoleBindingCreateRequest = ClusterRoleBindingCreateRequest.toDto(req.body)

        await KubeApiClient.rbacAuthorizationV1Api
            .createClusterRoleBinding(ClusterRole.getClusterRoleBinding(dto))

        res.status(201).send({ success: true })
    }
}