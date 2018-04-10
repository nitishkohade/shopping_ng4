import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getBrowseService } from '../../../core/services/browseService';
import { BrowseComponent } from './browse.component';

describe('BrowseComponent', () => {
    let comp: BrowseComponent;
    let fixture: ComponentFixture<BrowseComponent>;

    beforeEach(() => {
        const activatedRouteStub = {
            snapshot: {
                url: {
                    join: () => ({})
                }
            }
        };
        const getBrowseServiceStub = {
            getBrowseData: () => ({
                subscribe: () => ({})
            })
        };
        TestBed.configureTestingModule({
            declarations: [ BrowseComponent ],
            schemas: [ NO_ERRORS_SCHEMA ],
            providers: [
                { provide: ActivatedRoute, useValue: activatedRouteStub },
                { provide: getBrowseService, useValue: getBrowseServiceStub }
            ]
        });
        fixture = TestBed.createComponent(BrowseComponent);
        comp = fixture.componentInstance;
    });

    it('can load instance', () => {
        expect(comp).toBeTruthy();
    });

});
