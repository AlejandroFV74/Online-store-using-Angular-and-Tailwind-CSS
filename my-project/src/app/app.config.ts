import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    //withComponentInputBinding() indica a Angular que se mandan como imputs los parámetros de la ruta
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient()
  ]
};
