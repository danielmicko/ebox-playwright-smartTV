import {test} from '../framework/fixture';
import {assert, PROP, VRC} from 'suitest-js-api';

test('test', async ({suitest}) => {
    await assert.openApp();

    /**
     * Wait for Oneplay to be up
     */
    await assert.element(suitest.loginPage.continueButton).visible().timeout(30000)

    /**
     * Select preprod1
     */
    await suitest.landingPage.selectPreprod1Async()
    await assert.press(VRC.ENTER).interval(1000);

    /**
     * Login using email
     */
    await assert.element(suitest.landingPage.loginViaEmailButton).visible().timeout(5000);
    await assert.press(VRC.ENTER).interval(1000);
    await assert.element(suitest.loginPage.emailInput).visible().timeout(5000);

    /**
     * Enter email
     */
    await suitest.loginPage.enterEmailViaRemote()

    /**
     * Enter password
     */
    await suitest.loginPage.enterPasswordViaRemote();
    await assert.press(VRC.ENTER).interval(1000);

    /**
     * Login
     */
    await assert.element(suitest.loginPage.continueButton).matches([
        {
            name: PROP.TEXT_CONTENT,
            val: 'Pokračovat',
        },
    ]).timeout(10000);
    await assert.press(VRC.ENTER).interval(1000);
    await assert.element(suitest.loginPage.continueButton).matches([
        {
            name: PROP.TEXT_CONTENT,
            val: 'Dokončit a vstoupit do Oneplay',
        },
    ]).timeout(2000);
    await assert.press(VRC.ENTER).interval(1000);

    /**
     * Select profile
     */
    await assert.element(suitest.profiles.profileTile).matches([
        PROP.TEXT_CONTENT,
    ]).timeout(2000);
    await assert.press(VRC.ENTER).interval(1000);
    await assert.element(suitest.homepage.homepageVisible).exists().timeout(15000);


})