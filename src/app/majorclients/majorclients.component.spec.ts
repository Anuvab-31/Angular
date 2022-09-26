import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MajorclientsComponent } from './majorclients.component';

describe('MajorclientsComponent', () => {
  let component: MajorclientsComponent;
  let fixture: ComponentFixture<MajorclientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MajorclientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MajorclientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
