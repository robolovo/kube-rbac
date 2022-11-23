import { V1Role, V1RoleBinding } from "@kubernetes/client-node"
import { KIND, API_VERSION }from '../constants'
import { RoleBindingCreateRequest, RoleCreateRequest } from "../controller/dto/rbacCreateRequests"

export class Role {
    private constructor() {}

    public static getRole(dto: RoleCreateRequest): V1Role {
        return {
            apiVersion: API_VERSION.RBAC,
            kind: KIND.ROLE,
            metadata: {
                namespace: dto.namespace,
                name: dto.name
            },
            rules: [
                {
                    resources: dto.resources,
                    verbs: dto.verbs
                }
            ]
        }
    }

    public static getRoleBinding(dto: RoleBindingCreateRequest): V1RoleBinding {
        return {
            apiVersion: API_VERSION.RBAC,
            kind: KIND.ROLE_BINDING,
            metadata: {
                namespace: dto.namespace,
                name: dto.name
            },
            subjects: [
                {
                    kind: dto.subjectKind,
                    namespace: dto.namespace,
                    name: dto.subjectName
                }
            ],
            roleRef: {
                apiGroup: API_VERSION.RBAC,
                kind: KIND.ROLE,
                name: dto.roleName
            }
        }
    }
}