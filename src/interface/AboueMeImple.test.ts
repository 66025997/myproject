import { AboueMeImple } from './AboueMeImple';

test('me should return name and student ID', () => {
    const service = new AboueMeImple();
    expect(service.me()).toBe('ชื่อ กัญญาวีร์ ทิพโหมด, รหัสนิสิต 66025997');
});