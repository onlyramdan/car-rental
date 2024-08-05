import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { ApiService } from './services/api.service';
import { AuthInterceptor } from './services/auth.interceptor';
import { FormsModule } from '@angular/forms';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes),
    provideHttpClient(withInterceptors([AuthInterceptor])),
    ApiService,
    FormsModule, // Ensure FormsModule is included here
  ],
}).catch((err) => console.error(err));
