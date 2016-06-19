import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { StamplayTestsComponent } from './stamplay-tests.component';

describe('Component: StamplayTests', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [StamplayTestsComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([StamplayTestsComponent],
      (component: StamplayTestsComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(StamplayTestsComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(StamplayTestsComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-stamplay-tests></app-stamplay-tests>
  `,
  directives: [StamplayTestsComponent]
})
class StamplayTestsComponentTestController {
}

