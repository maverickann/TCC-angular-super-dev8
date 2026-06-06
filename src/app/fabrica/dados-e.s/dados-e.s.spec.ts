import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosES } from './dados-e.s';

describe('DadosES', () => {
  let component: DadosES;
  let fixture: ComponentFixture<DadosES>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DadosES]
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
