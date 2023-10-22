import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguagedetectionComponent } from './languagedetection.component';

describe('LanguagedetectionComponent', () => {
  let component: LanguagedetectionComponent;
  let fixture: ComponentFixture<LanguagedetectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LanguagedetectionComponent]
    });
    fixture = TestBed.createComponent(LanguagedetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
