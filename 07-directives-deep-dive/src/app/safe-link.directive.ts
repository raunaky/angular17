import { Directive, ElementRef, inject, input } from "@angular/core";
import { LogDirective } from "./log.directive";

@Directive({
    selector: 'a[appSafeLink]',
    standalone: true,
    host: {
        '(click)': 'onConfirmLeavePage($event)'
    },
    hostDirectives:[LogDirective]
})
export class SafeLinkDirective {

    queryParam = input('myapp' ,{alias: 'appSafeLink'});
    private hostElementRef = inject<ElementRef<HTMLAnchorElement> >(ElementRef);

    constructor() {
        console.log('safe link directive is added');
    }


    onConfirmLeavePage(event: MouseEvent) {
        const wantsToLeave =  window.confirm('Do you want to leave this website');

        if(wantsToLeave) {
            const address = this.hostElementRef.nativeElement.href;
            this.hostElementRef.nativeElement.href = address + this.queryParam();
            return;
        }
        event.preventDefault();
    }
}