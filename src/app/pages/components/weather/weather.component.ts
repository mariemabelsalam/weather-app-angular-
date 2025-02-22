import { FormsModule } from '@angular/forms';
import { WeatherService } from './../../service/weather.service';
import { Component } from '@angular/core';
import { WeatherRes } from '../../../interfaces/weater-rea';

@Component({
  selector: 'app-weather',
  imports: [FormsModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent {
  isLoading:boolean=false
  constructor(private readonly weatherService: WeatherService) { }
  city: string = ""
  weatherData!:WeatherRes

  
  getDetails() {
    this.weatherService.getWeather(this.city).subscribe({
      next: (res) => {
        this.weatherData=res
        this.isLoading=true;
      }
    })
  }
}
