import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcountrycasesComponent } from './allcountrycases.component';

describe('AllcountrycasesComponent', () => {
  let component: AllcountrycasesComponent;
  let fixture: ComponentFixture<AllcountrycasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllcountrycasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllcountrycasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
