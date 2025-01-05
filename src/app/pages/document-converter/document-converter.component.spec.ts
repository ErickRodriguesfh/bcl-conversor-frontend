import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentConverterComponent } from './document-converter.component';

describe('DocumentConverterComponent', () => {
  let component: DocumentConverterComponent;
  let fixture: ComponentFixture<DocumentConverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentConverterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
