import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentRanklistComponent } from './current-ranklist.component';

describe('CurrentRanklistComponent', () => {
  let component: CurrentRanklistComponent;
  let fixture: ComponentFixture<CurrentRanklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentRanklistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentRanklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
