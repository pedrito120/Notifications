import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceAPIService {

  constructor(private http: HttpClient) { }

  public sendNotification(data: any) {
    const URL = 'https://onesignal.com/api/v1/notifications';
    // CAMBIAR A TU APP ID
    const APP_ID = '59068603-2542-4a62-8fed-69e51bdca0ed';
    let segments = Object.keys(data).length > 2 ? Object.keys(data).slice(2) : null ;
    let body = {
        app_id: APP_ID,
        included_segments: segments,
        data: {
          task: 'Send trough API'
        },
        headings: {
          en: data.header
        },
        contents: {
          en: data.contents
        }
      };
    let headers = new HttpHeaders().append('Authorization', 'Basic NjMzYjViNzktN2ZmZS00ODk2LWE3NzItMWNiMTY4NTQyYzJl');
    headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(URL, body, {headers});
  }
}
