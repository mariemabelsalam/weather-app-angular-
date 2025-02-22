import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherRes } from '../../interfaces/weater-rea';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private readonly httpClient: HttpClient) { }

  key = '31a59e34ab210fd23b1238a9a1d498aa'

  getWeather(city: string): Observable<WeatherRes> {
    return this.httpClient.get<WeatherRes>(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.key}&units=metric`)
  }
}
