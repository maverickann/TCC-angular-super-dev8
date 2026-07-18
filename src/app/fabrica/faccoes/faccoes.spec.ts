import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Faccoes } from './faccoes';

describe('Faccoes', () => {
  let component: Faccoes;
  let fixture: ComponentFixture<Faccoes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Faccoes],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Faccoes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
