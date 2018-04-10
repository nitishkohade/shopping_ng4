import { split } from './arrayPipe';

describe('split', () => { 
    let pipe: split;

    beforeEach(() => {
        pipe = new split();
    });

    it('transforms X to Y', () => {
        const value: any = 'X';
        const args: string[] = [];

        expect(pipe.transform(value, args)).toEqual('Y');
    });

});
