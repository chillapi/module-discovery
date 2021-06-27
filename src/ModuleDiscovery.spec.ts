import { load } from './ModuleDiscovery';

test('loads test module', () => {
    jest.mock('./package.json', () => ({ dependencies: { "dep": "1.0" } }));
    jest.mock('dep');
    expect(load('foo').length).toBe(1);
    expect(load('bar').length).toBe(0);
});