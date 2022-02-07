import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremierpageComponent } from './premierpage.component';

describe('PremierpageComponent', () => {
  let component: PremierpageComponent;
  let fixture: ComponentFixture<PremierpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PremierpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PremierpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
