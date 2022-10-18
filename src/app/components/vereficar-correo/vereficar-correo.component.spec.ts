import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VereficarCorreoComponent } from './vereficar-correo.component';

describe('VereficarCorreoComponent', () => {
  let component: VereficarCorreoComponent;
  let fixture: ComponentFixture<VereficarCorreoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VereficarCorreoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VereficarCorreoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
