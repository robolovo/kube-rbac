import { V1ServiceAccount } from "@kubernetes/client-node"
import { KIND, API_VERSION }from '../constants'
import { ServiceAccountCreateRequest } from "../controller/dto/coreCreateRequests"

export class ServiceAccount {
    private constructor() {}

    public static get(dto: ServiceAccountCreateRequest): V1ServiceAccount {
        return {
            apiVersion: API_VERSION.CORE,
            kind: KIND.SERVICE_ACCOUNT,
            metadata: {
                namespace: dto.namespace,
                name: dto.name,
            },
        }
    }
}