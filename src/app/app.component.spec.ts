import { 
  TestBed,
  async,
  inject
} from '@angular/core/testing';
import { Router } from '@angular/router';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
class MockRouter {
  navigateByUrl(url: string) { return url; }
}

describe('AppComponent', () => {
  let component: AppComponent;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [ RouterTestingModule ],
      providers: [
        {  provide: Router, useClass: MockRouter }
      ]
    })
    .compileComponents().then(() => {
      const fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance;
    });
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to yelp-angular!');
  }));
  it('should call Router.navigateByUrl("/tweets") on loading', inject([Router], (router: Router) => {
    const spy = spyOn(router, 'navigateByUrl');
    const url = spy.calls.first().args[0];
    expect(url).toBe('/tweets');
  }))
});
