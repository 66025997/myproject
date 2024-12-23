import { SimpleService } from "./simple";

test('SimpleServiceImpl ok', () => {
    let service = new SimpleService();
    expect(service.ok()).toBe('ok');
});
