import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecordarCuentaPage } from './recordar-cuenta.page';

describe('RecordarCuentaPage', () => {
  let component: RecordarCuentaPage;
  let fixture: ComponentFixture<RecordarCuentaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordarCuentaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
