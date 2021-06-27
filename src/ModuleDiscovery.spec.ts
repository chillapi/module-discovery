import { load } from './ModuleDiscovery';

test('loads test module', async () => {
    expect((await load('generateStubs')).length).toBe(1);
    expect((await load('bar')).length).toBe(0);
});