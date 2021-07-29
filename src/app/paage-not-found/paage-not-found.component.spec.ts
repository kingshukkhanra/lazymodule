import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaageNotFoundComponent } from './paage-not-found.component';

describe('PaageNotFoundComponent', () => {
  let component: PaageNotFoundComponent;
  let fixture: ComponentFixture<PaageNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaageNotFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
