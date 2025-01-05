import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FileFormat } from '../models/file-format';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private httpClient: HttpClient) { }

  getAvaiableFormats(fileFormat: string): Observable<string[]> {
    return this.httpClient.get<string[]>(`/file-upload/get-formats/${fileFormat}`);
  }

}
