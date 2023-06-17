import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoundsDetailPageComponent } from './compounds-detail-page.component';

describe('CompoundsDetailPageComponent', () => {
  let component: CompoundsDetailPageComponent;
  let fixture: ComponentFixture<CompoundsDetailPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompoundsDetailPageComponent]
    });
    fixture = TestBed.createComponent(CompoundsDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
