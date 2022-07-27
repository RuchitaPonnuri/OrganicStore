import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Catalogue4Component } from './catalogue4.component';

describe('Catalogue4Component', () => {
  let component: Catalogue4Component;
  let fixture: ComponentFixture<Catalogue4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Catalogue4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Catalogue4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
