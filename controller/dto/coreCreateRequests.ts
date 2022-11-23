export class ServiceAccountCreateRequest {
    public name: string
    public namespace: string

    private constructor(name: string, namespace: string) {
        this.name = name
        this.namespace = namespace
    }

    public static toDto(
        body: {
            name: string, 
            namespace: string, 
        }
    ) {
        console.log(body.namespace)
        return new ServiceAccountCreateRequest(
            body.name,
            body.namespace,
        )
    }
}