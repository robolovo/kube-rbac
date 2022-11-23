import { CoreV1Api, KubeConfig, RbacAuthorizationV1Api } from "@kubernetes/client-node"
const k8s = require('@kubernetes/client-node')

export class KubeApiClient {
    public static coreV1Api: CoreV1Api
    public static rbacAuthorizationV1Api: RbacAuthorizationV1Api

    public static initKubeApiClients() {
        const cluster = {
            name: process.env.CLUSTER_NAME,
            server: `https://${process.env.CLUSTER_HOST}:${process.env.CLUSTER_PORT}`,
            caFile: process.env.CLUSTER_CA_CRT_PATH
        }
        
        const user = {
            name: process.env.USER_NAME,
            certFile: process.env.USER_CA_CRT_PATH,
            keyFile: process.env.USER_PRIVATE_KEY_PATH
        }

        const context = {
            name: process.env.CONTEXT_NAME,
            user: user.name,
            cluster: cluster.name
        }

        const kubeConfig = new k8s.KubeConfig()
        kubeConfig.loadFromOptions({
                clusters: [cluster],
                users: [user],
                contexts: [context],
                currentContext: context.name
            })
        
        this.makeCoreV1ApiClient(kubeConfig)
        this.makeRbacAuthorizationV1ApiClient(kubeConfig)
    }

    private static makeCoreV1ApiClient(kubeConfig: KubeConfig) {
        this.coreV1Api = kubeConfig.makeApiClient(k8s.CoreV1Api)
    }
    
    private static makeRbacAuthorizationV1ApiClient(kubeConfig: KubeConfig) {
        this.rbacAuthorizationV1Api = kubeConfig.makeApiClient(k8s.RbacAuthorizationV1Api)
    }
}