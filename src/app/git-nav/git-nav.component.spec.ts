import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitNavComponent } from './git-nav.component';

describe('GitNavComponent', () => {
  let component: GitNavComponent;
  let fixture: ComponentFixture<GitNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GitNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GitNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
