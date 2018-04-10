import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { genericComponent } from './generic';

describe('genericComponent', () => {
    let comp: genericComponent;
    let fixture: ComponentFixture<genericComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ genericComponent ],
            schemas: [ NO_ERRORS_SCHEMA ]
        });
        fixture = TestBed.createComponent(genericComponent);
        comp = fixture.componentInstance;
    });

    it('can load instance', () => {
        expect(comp).toBeTruthy();
    });

});
