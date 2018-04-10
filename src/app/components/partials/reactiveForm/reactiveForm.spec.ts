import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { reactiveFormComponent } from './reactiveForm';

describe('reactiveFormComponent', () => {
    let comp: reactiveFormComponent;
    let fixture: ComponentFixture<reactiveFormComponent>;

    beforeEach(() => {
        const formGroupStub = {
            valid: {},
            value: {
                name: {},
                email: {},
                message: {}
            }
        };
        TestBed.configureTestingModule({
            declarations: [ reactiveFormComponent ],
            schemas: [ NO_ERRORS_SCHEMA ],
            providers: [
                { provide: FormGroup, useValue: formGroupStub }
            ]
        });
        fixture = TestBed.createComponent(reactiveFormComponent);
        comp = fixture.componentInstance;
    });

    it('can load instance', () => {
        expect(comp).toBeTruthy();
    });

    it('formObject defaults to: []', () => {
        expect(comp.formObject).toEqual([]);
    });

});
