import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QualiteProfessionnelleComponent } from './qualite-professionnelle.component';

describe('QualiteProfessionnelleComponent', () => {
  let component: QualiteProfessionnelleComponent;
  let fixture: ComponentFixture<QualiteProfessionnelleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QualiteProfessionnelleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QualiteProfessionnelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
