import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SaberAsistenciaPage } from './saber-asistencia.page';

describe('SaberAsistenciaPage', () => {
  let component: SaberAsistenciaPage;
  let fixture: ComponentFixture<SaberAsistenciaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SaberAsistenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
