import { load } from './ModuleDiscovery';

test('loads test module', async () => {
    expect((await load('sync')).length).toBe(1); // pkg-up has an exported method called sync
    expect((await load('bar')).length).toBe(0);
});