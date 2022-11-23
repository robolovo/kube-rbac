import { Request, Response } from 'express'
import { KubeApiClient } from '../config/KubeApiClient'
import { ServiceAccount } from '../k8s/ServiceAccount'
import { ServiceAccountCreateRequest } from './dto/coreCreateRequests'

export default class CoreApiController {
    public constructor() {}

    public async createServiceAccount(req: Request, res: Response) {
        const dto: ServiceAccountCreateRequest = ServiceAccountCreateRequest.toDto(req.body)

        await KubeApiClient.coreV1Api
            .createNamespacedServiceAccount(dto.namespace, ServiceAccount.get(dto))

        res.status(201).send({ success: true })
    }
}