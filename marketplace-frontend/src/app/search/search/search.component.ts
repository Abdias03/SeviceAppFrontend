import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeolocationService } from '../../core/geolocation.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule }    from '@angular/material/select';
import { MatButtonModule }    from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchForm!: FormGroup;
  loadingLocation = false;
  locationError: string | null = null;

  constructor(
    private fb: FormBuilder,
    private geo: GeolocationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      categoria: ['', Validators.required],
      lat: [null, Validators.required],
      lng: [null, Validators.required]
    });
    this.fetchLocation();
  }

  fetchLocation(): void {
    this.loadingLocation = true;
    this.geo.getCurrentPosition()
      .then(pos => {
        this.searchForm.patchValue({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude
        });
        this.loadingLocation = false;
      })
      .catch(() => {
        this.locationError = 'No se pudo obtener la ubicación';
        this.loadingLocation = false;
      });
  }

  onSearch(): void {
    if (this.searchForm.invalid) return;
    const { categoria, lat, lng } = this.searchForm.value;
    this.router.navigate(['/results'], {
      queryParams: { categoria, lat, lng }
    });
  }
}