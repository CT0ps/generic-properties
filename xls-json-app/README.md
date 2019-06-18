# XlsJsonApp
The module to convert the spreadsheet file to json data

## Quick installation
From your project app run below :

```
npm i --save-dev xlsx
npm i --save xls-json-app/dist/xls-json-app-<version>.tgz
```

Add the module to the project app module e.g app.module.ts :

```
import { XlsJsonModule } from 'xls-json-app';
...

imports: [
    ...
    XlsJsonModule
]
```

Finally, insert the element to the component template :

```
<xls-json (dataEvent)="funcCallName($event)"></xls-json>
```