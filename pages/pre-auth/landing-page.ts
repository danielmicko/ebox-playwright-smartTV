import {getSelector} from '../../framework/utils/helpers';
import suitest, {assert, PROP, VRC} from "suitest-js-api";

export class LandingPage {

    private selectors = {
        loginButton: {
            default: '.landingItem.button.login.focused',
        },
        focusedApiOptionButton: {
            default: '.buttons.apiOption.focused .inner'
        },
        loginViaEmailButton: {
            default: '.loginViaEmailButton',
        },
        selectedApiOptionButton: {
            default: '.landingItem.button.api',
        }
    }

    getSelector(name: keyof typeof this.selectors): string {
        return getSelector(this.selectors, name);
    }

    // Locators
    readonly loginButton = this.getSelector('loginButton')
    readonly focusedApiOptionButton = this.getSelector('focusedApiOptionButton')
    readonly loginViaEmailButton = this.getSelector('loginViaEmailButton')
    readonly selectedApiOptionButton = this.getSelector('selectedApiOptionButton')


    // Snippets
    async selectPreprod1Async() {
        await assert.press(VRC.UP).interval(1000);
        await assert.press(VRC.ENTER).interval(1000);
        await assert.press(VRC.UP).until(
            suitest.element('focusedApiOptionButton').matches([
                {
                    name: PROP.TEXT_CONTENT,
                    val: 'Preprod 1 ASYNC',
                },
            ])
        ).repeat(13).interval(100);
        await assert.press(VRC.ENTER).interval(1000);
        await assert.element('selectedApiOptionButton').matches([
            PROP.TEXT_CONTENT,
        ]).timeout(2000);
        await assert.press(VRC.DOWN).interval(1000);
    }
}