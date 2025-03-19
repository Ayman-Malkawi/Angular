import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NafbarComponent } from './nafbar.component';

describe('NafbarComponent', () => {
  let component: NafbarComponent;
  let fixture: ComponentFixture<NafbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NafbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NafbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
