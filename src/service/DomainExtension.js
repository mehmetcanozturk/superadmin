export class DomainExtension {
    getDomainExtension() {
        return fetch('demo/data/domain-extension.json', { headers: { 'Cache-Control': 'no-cache' } })
            .then((res) => res.json())
            .then((d) => d.data);
    }

}