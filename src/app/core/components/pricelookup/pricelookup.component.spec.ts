import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricelookupComponent } from './pricelookup.component';

describe('PricelookupComponent', () => {
  let component: PricelookupComponent;
  let fixture: ComponentFixture<PricelookupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricelookupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricelookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
