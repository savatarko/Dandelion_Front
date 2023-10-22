import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokensubmitComponent } from './tokensubmit.component';

describe('TokensubmitComponent', () => {
  let component: TokensubmitComponent;
  let fixture: ComponentFixture<TokensubmitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TokensubmitComponent]
    });
    fixture = TestBed.createComponent(TokensubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
