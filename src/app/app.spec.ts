/**
 * Created by Jun on 10/12/2016.
 */
import {
  inject,
  TestBed
} from '@angular/core/testing';

// Load the implementations that should be tested
import { App } from './app.component';

describe('App', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      App
    ]}));

  it('should have a title', inject([ App ], (app: App) => {
    expect(app.title).toEqual('test');
  }));

});
