export const load = (interfaceItem: string) => {
    return Object.keys(require('./package.json').dependencies)
        .map(dep => require(dep))
        .filter(dep => !!dep[interfaceItem])
}