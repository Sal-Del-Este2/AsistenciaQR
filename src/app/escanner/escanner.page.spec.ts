import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EscannerPage } from './escanner.page';

describe('EscannerPage', () => {
  let component: EscannerPage;
  let fixture: ComponentFixture<EscannerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EscannerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
