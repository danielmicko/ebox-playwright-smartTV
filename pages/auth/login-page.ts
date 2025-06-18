import {getSelector} from '../../framework/utils/helpers';
import {assert, VRC} from 'suitest-js-api';

export class LoginPage {

    private selectors = {
        continueButton: {
            default: '.buttons.confirm.focused .inner',
            samsung: '.buttons.confirm.focused .inner',
            lg: '.buttons.confirm.focused .inner'
        },
        emailInput: {
            default: '.email'
        }
    }

    getSelector(name: keyof typeof this.selectors): string {
        return getSelector(this.selectors, name);
    }

    // Locators
    readonly continueButton = this.getSelector('continueButton');
    readonly emailInput = this.getSelector('emailInput');


    // Snippets
    async enterEmailViaRemote() {
        await assert.press(VRC.ENTER).interval(1000);
        await assert.press(VRC.DOWN).repeat(4).interval(100);
        await assert.press(VRC.RIGHT).repeat(2).interval(100);
        await assert.press(VRC.RIGHT).repeat(2).interval(100);
        await assert.press(VRC.ENTER).interval(1000);
        await assert.press(VRC.DOWN).interval(1000);
        await assert.press(VRC.ENTER).interval(1000);
    }

    async enterPasswordViaRemote() {
        await assert.press(VRC.UP).repeat(2).interval(100);
        await assert.press(VRC.LEFT).repeat(2).interval(100);
        await assert.press(VRC.ENTER).repeat(6).interval(100);
        await assert.press(VRC.DOWN).repeat(2).interval(100);
        await assert.press(VRC.ENTER).interval(1000);
    }

}