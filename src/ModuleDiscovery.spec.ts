import { load } from './ModuleDiscovery';

test('loads test module', async () => {
    const actual = await load('sync');
    expect(actual[0]).toBe('pkg-up'); // pkg-up has an exported method called sync
    expect((await load('bar')).length).toBe(0);
});