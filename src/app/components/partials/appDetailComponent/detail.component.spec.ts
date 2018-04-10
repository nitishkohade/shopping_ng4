import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { productDetailService } from '../../../core/services/productDetailService';
import { ActivatedRoute } from '@angular/router';
import { homeComponent } from './home';

describe('homeComponent', () => {
    let comp: homeComponent;
    let fixture: ComponentFixture<homeComponent>;

    beforeEach(() => {
        const productDetailServiceStub = {
            getDeviceData: () => ({
                subscribe: () => ({})
            })
        };
        const activatedRouteStub = {
            params: {
                subscribe: () => ({})
            }
        };
        TestBed.configureTestingModule({
            declarations: [ homeComponent ],
            schemas: [ NO_ERRORS_SCHEMA ],
            providers: [
                { provide: productDetailService, useValue: productDetailServiceStub },
                { provide: ActivatedRoute, useValue: activatedRouteStub }
            ]
        });
        fixture = TestBed.createComponent(homeComponent);
        comp = fixture.componentInstance;
    });

    it('can load instance', () => {
        expect(comp).toBeTruthy();
    });

});
