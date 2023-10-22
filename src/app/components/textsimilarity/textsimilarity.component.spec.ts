import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextsimilarityComponent } from './textsimilarity.component';

describe('TextsimilarityComponent', () => {
  let component: TextsimilarityComponent;
  let fixture: ComponentFixture<TextsimilarityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextsimilarityComponent]
    });
    fixture = TestBed.createComponent(TextsimilarityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
