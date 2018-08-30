import { PdfModule } from './pdf.module';

describe('PdfModule', () => {
  let pdfModule: PdfModule;

  beforeEach(() => {
    pdfModule = new PdfModule();
  });

  it('should create an instance', () => {
    expect(pdfModule).toBeTruthy();
  });
});
