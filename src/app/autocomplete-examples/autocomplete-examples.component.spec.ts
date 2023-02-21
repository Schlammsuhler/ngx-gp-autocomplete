import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteExamplesComponent } from './autocomplete-examples.component';

describe('AutocompleteExamplesComponent', () => {
  let component: AutocompleteExamplesComponent;
  let fixture: ComponentFixture<AutocompleteExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutocompleteExamplesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutocompleteExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
