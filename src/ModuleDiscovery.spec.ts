import { load } from './ModuleDiscovery';

test('loads test module', async () => {
    // pkg-up exports a method called sync
    expect((await load('sync')).length).toBe(1);
    expect((await load('bar')).length).toBe(0);
});