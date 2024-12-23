import { IsimpleService } from "./iservice";

export class SimpleService implements IsimpleService {
    constructor() {
        // simple service constructor
    }

    ok(): string {
        return 'ok';
    };

}