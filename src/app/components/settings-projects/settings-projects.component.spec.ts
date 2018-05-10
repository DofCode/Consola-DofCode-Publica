import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsProjectsComponent } from './settings-projects.component';

describe('SettingsProjectsComponent', () => {
  let component: SettingsProjectsComponent;
  let fixture: ComponentFixture<SettingsProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
