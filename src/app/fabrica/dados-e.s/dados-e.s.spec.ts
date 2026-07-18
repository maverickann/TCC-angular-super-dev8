import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { DadosES } from './dados-e.s';

describe('DadosES', () => {
  let component: DadosES;
  let fixture: ComponentFixture<DadosES>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DadosES],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DadosES);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
