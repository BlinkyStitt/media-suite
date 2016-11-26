/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ClarityModule } from 'clarity-angular';
import { SetupComponent } from './setup.component';

describe('SetupComponent with TCB', function () {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ClarityModule],
      declarations: [SetupComponent]
    });
  });

  it('should instantiate SetupComponent', async(() => {
    TestBed.compileComponents().then(() => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(SetupComponent);
      fixture.detectChanges();
      expect(fixture.componentInstance instanceof SetupComponent).toBe(true, 'should create SetupComponent');
    });
  }));
});
