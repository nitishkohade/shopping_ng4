import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TemplateFormComponent } from './templateForm';

describe('TemplateFormComponent', () => {
    let comp: TemplateFormComponent;
    let fixture: ComponentFixture<TemplateFormComponent>;

    beforeEach(() => {
        const formBuilderStub = {
            group: () => ({})
        };
        TestBed.configureTestingModule({
            declarations: [ TemplateFormComponent ],
            schemas: [ NO_ERRORS_SCHEMA ],
            providers: [
                { provide: FormBuilder, useValue: formBuilderStub }
            ]
        });
        fixture = TestBed.createComponent(TemplateFormComponent);
        comp = fixture.componentInstance;
    });

    it('can load instance', () => {
        expect(comp).toBeTruthy();
    });

    describe('ngOnInit', () => {
        it('makes expected calls', () => {
            const formBuilderStub = fixture.debugElement.injector.get(FormBuilder);
            spyOn(formBuilderStub, 'group');
            comp.ngOnInit();
            expect(formBuilderStub.group).toHaveBeenCalled();
        });
    });

});
