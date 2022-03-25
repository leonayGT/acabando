import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaInicComponent } from './tela-inic.component';

describe('TelaInicComponent', () => {
  let component: TelaInicComponent;
  let fixture: ComponentFixture<TelaInicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaInicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaInicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
