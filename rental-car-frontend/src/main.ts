import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { appRoutes } from './app/app.routes';
import { AuthInterceptor } from './app/services/auth.interceptor';
import { AppModule } from './app/app.module';

bootstrapApplication(AppModule, {
  providers: [
    provideRouter(appRoutes),
    provideHttpClient(withInterceptors([AuthInterceptor])),
  ],
}).catch((err) => console.error(err));
