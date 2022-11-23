import { V1ClusterRole, V1ClusterRoleBinding } from "@kubernetes/client-node"
import { KIND, API_VERSION }from '../constants'
import { ClusterRoleBindingCreateRequest, ClusterRoleCreateRequest } from "../controller/dto/rbacCreateRequests"

export class ClusterRole {
    private constructor() {}

    public static getClusterRole(dto: ClusterRoleCreateRequest): V1ClusterRole {
        return {
            apiVersion: API_VERSION.RBAC,
            kind: KIND.CLUSTER_ROLE,
            metadata: {
                name: dto.name
            },
            rules: [
                {
                    nonResourceURLs: dto.nonResourceURLs,
                    resources: dto.resources,
                    verbs: dto.verbs
                }
            ]
        }
    }

    public static getClusterRoleBinding(dto: ClusterRoleBindingCreateRequest): V1ClusterRoleBinding {
        return {
            apiVersion: API_VERSION.RBAC,
            kind: KIND.CLUSTER_ROLE_BINDING,
            metadata: {
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
                kind: KIND.CLUSTER_ROLE,
                name: dto.clusterRoleName
            }
        }
    }
}