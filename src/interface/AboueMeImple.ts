import { IAboueMe } from './IAboueMe';

export class AboueMeImple implements IAboueMe {
    me(): string {
        return 'ชื่อ กัญญาวีร์ ทิพโหมด, รหัสนิสิต 66025997';
    }
}