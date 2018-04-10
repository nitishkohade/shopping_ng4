import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { DataGridComponent } from './data-grid';

describe('DataGridComponent', () => {
    let comp: DataGridComponent;
    let fixture: ComponentFixture<DataGridComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ DataGridComponent ],
            schemas: [ NO_ERRORS_SCHEMA ]
        });
        fixture = TestBed.createComponent(DataGridComponent);
        comp = fixture.componentInstance;
    });

    it('can load instance', () => {
        expect(comp).toBeTruthy();
    });

});
