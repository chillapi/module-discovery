import { readFile } from 'fs/promises';
import pkgUp from 'pkg-up';

export async function load(interfaceItem: string): Promise<string[]> {
    const pkgPath = await pkgUp();
    console.log(`Found package.json at ${pkgPath}`);
    const pkg = JSON.parse((await readFile(pkgPath)).toString());
    return Object.keys(pkg.dependencies)
        .map(dep => require(dep))
        .filter(dep => !!dep[interfaceItem]);
}