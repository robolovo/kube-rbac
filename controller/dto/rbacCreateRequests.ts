export class RoleCreateRequest {
    public name: string
    public namespace: string
    public resources: string[]
    public verbs: string[]

    private constructor(name: string, namespace: string, resources: string[], verbs: string[]) {
        this.name = name
        this.namespace = namespace
        this.resources = resources
        this.verbs = verbs
    }

    public static toDto(
        body: {
            name: string, 
            namespace: string, 
            resources: string[], 
            verbs: string[]
        }
    ) {
        return new RoleCreateRequest(
            body.name,
            body.namespace,
            body.resources,
            body.verbs
        )
    }
}

export class ClusterRoleCreateRequest {
    public name: string
    public nonResourceURLs: string[]
    public resources: string[]
    public verbs: string[]

    private constructor(name: string, nonResourceURLs: string[], resources: string[], verbs: string[]) {
        this.name = name
        this.nonResourceURLs = nonResourceURLs
        this.resources = resources
        this.verbs = verbs
    }

    public static toDto(
        body: {
            name: string, 
            nonResourceURLs: string[], 
            resources: string[], 
            verbs: string[]
        }
    ) {
        return new ClusterRoleCreateRequest(
            body.name,
            body.nonResourceURLs,
            body.resources,
            body.verbs
        )
    }
}

export class RoleBindingCreateRequest {
    public name: string
    public namespace: string
    public subjectKind: string
    public subjectName: string
    public roleName: string

    private constructor(name: string, namespace: string, subjectKind: string, subjectName: string, roleName: string) {
        this.name = name
        this.namespace = namespace
        this.subjectKind = subjectKind
        this.subjectName = subjectName
        this.roleName = roleName
    }

    public static toDto(
        body: {
            name: string,
            namespace: string,
            subjectKind: string,
            subjectName: string,
            roleName: string
        }
    ) {
        return new RoleBindingCreateRequest(
            body.name,
            body.namespace,
            body.subjectKind,
            body.subjectName,
            body.roleName
        )
    }
}

export class ClusterRoleBindingCreateRequest {
    public name: string
    public namespace: string
    public subjectKind: string
    public subjectName: string
    public clusterRoleName: string

    private constructor(name: string, namespace: string, subjectKind: string, subjectName: string, clusterRoleName: string) {
        this.name = name
        this.namespace = namespace
        this.subjectKind = subjectKind
        this.subjectName = subjectName
        this.clusterRoleName = clusterRoleName
    }

    public static toDto(
        body: {
            name: string
            namespace: string
            subjectKind: string
            subjectName: string
            clusterRoleName: string
        }
    ) {
        return new ClusterRoleBindingCreateRequest(
            body.name,
            body.namespace,
            body.subjectKind,
            body.subjectName,
            body.clusterRoleName
        )
    }
}