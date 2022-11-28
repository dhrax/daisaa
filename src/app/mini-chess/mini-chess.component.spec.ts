import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniChessComponent } from './mini-chess.component';

describe('MiniChessComponent', () => {
  let component: MiniChessComponent;
  let fixture: ComponentFixture<MiniChessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniChessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniChessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
