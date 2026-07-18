import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Desenvolvimento } from './desenvolvimento';

describe('Desenvolvimento', () => {
  let component: Desenvolvimento;
  let fixture: ComponentFixture<Desenvolvimento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Desenvolvimento],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Desenvolvimento);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
