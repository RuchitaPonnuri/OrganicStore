import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Catalogue3Component } from './catalogue3.component';

describe('Catalogue3Component', () => {
  let component: Catalogue3Component;
  let fixture: ComponentFixture<Catalogue3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Catalogue3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Catalogue3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
