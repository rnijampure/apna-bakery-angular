import { Component, Input } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';
import { ChangeDetectionStrategy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HomemiddlesectionComponent } from './homemiddlesection/homemiddlesection.component';
import { HeaderComponent } from '../../common/header/header.component';
import { imagesDoughnut, imagesCupcakes } from '../../constants.ts/constants';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CarouselComponent,
    MatCardModule,
    MatButtonModule,
    HomemiddlesectionComponent,
    HeaderComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  /*   images = [
    './assets/images/1.png',
    './assets/images/2.png',
    './assets/images/3.png',
  ]; */

  imagesCupcakes = imagesCupcakes;

  imagesDoughnut = imagesDoughnut;
}
