import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Catalogue1Component } from './catalogue1.component';

describe('Catalogue1Component', () => {
  let component: Catalogue1Component;
  let fixture: ComponentFixture<Catalogue1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Catalogue1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Catalogue1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
