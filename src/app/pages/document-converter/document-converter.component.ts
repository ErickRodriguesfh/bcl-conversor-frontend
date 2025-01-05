import { Component } from '@angular/core';
import { FileUpload } from '../../models/file-upload.model';
import { FileUploadService } from '../../services/file-upload.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-document-converter',
  imports: [CommonModule],
  templateUrl: './document-converter.component.html',
  styleUrl: './document-converter.component.scss'
})
export class DocumentConverterComponent {

  selectedFile: FileUpload | null = null;
  extensionsAvaiables: string[] = [];
  readonly regex = /[^a-zA-Z0-9 ]/g;


  constructor(private fileUploadService: FileUploadService) {

  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.selectedFile = {
        name: file.name,
        size: file.size,
        type: file.type,
        lastModified: file.lastModified,
      };
      console.log(this.selectedFile)
      this.fillExtensionsAvaiable(this.selectedFile.type);
    }
  }

  fillExtensionsAvaiable(formatKey: string): void {
    formatKey = formatKey.replace(this.regex, '');
    console.log(formatKey)
    this.fileUploadService.getAvaiableFormats(formatKey).subscribe(
      (formats) => {
        this.extensionsAvaiables = formats;
      }
    );
  }


}
