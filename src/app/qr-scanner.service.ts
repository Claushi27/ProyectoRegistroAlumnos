import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QrScannerService {
  private apiUrl = 'https://api.qrserver.com/v1/read-qr-code/'; // URL de la API

  constructor(private http: HttpClient) { }

  scanQRCode(image: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', image); // Asegúrate de que el campo se llama 'file'

    return this.http.post<any>(this.apiUrl, formData);
  }
}
