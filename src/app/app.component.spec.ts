import { TestBed } from '@angular/core/testing';
<<<<<<< HEAD
=======
import { RouterModule } from '@angular/router';
>>>>>>> module
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
<<<<<<< HEAD
      imports: [AppComponent],
=======
      imports: [
        RouterModule.forRoot([])
      ],
      declarations: [
        AppComponent
      ],
>>>>>>> module
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

<<<<<<< HEAD
  it(`should have the 'stock-market' title`, () => {
=======
  it(`should have as title 'stock-market'`, () => {
>>>>>>> module
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('stock-market');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, stock-market');
  });
});
