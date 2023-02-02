import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// Import der Demo-TypeScript-Datei, damit diese beim Start der Anwednung ausgeführt wird.
//import './app/ts/demo';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
