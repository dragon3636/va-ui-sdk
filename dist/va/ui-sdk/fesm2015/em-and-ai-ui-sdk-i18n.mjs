import * as i0 from '@angular/core';
import { Pipe, NgModule } from '@angular/core';

class TranslatePipe {
    transform(value) {
        // Here you would translate the key
        return `${value} (translated)`;
    }
}
TranslatePipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: TranslatePipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
TranslatePipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: TranslatePipe, name: "translate" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: TranslatePipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'translate',
                }]
        }] });

class I18nModule {
}
I18nModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: I18nModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
I18nModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: I18nModule, declarations: [TranslatePipe], exports: [TranslatePipe] });
I18nModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: I18nModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: I18nModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [TranslatePipe],
                    imports: [],
                    exports: [TranslatePipe],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { I18nModule, TranslatePipe };
//# sourceMappingURL=em-and-ai-ui-sdk-i18n.mjs.map
