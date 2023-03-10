import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
<<<<<<< HEAD
  .catch(err => console.error(err));
=======
  .catch((err) => console.error(err));
>>>>>>> 58c3c486d23eee5eeb502dabae01540e3847242c
