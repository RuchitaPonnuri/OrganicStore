import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Catalogue5Component } from './catalogue5.component';

describe('Catalogue5Component', () => {
  let component: Catalogue5Component;
  let fixture: ComponentFixture<Catalogue5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Catalogue5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Catalogue5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
