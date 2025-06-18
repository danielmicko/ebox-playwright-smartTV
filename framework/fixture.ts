import { test as base } from '@playwright/test';
import {Suitest} from '../pages/suitest';

type Fixture = {
    suitest: Suitest;
};

export const test = base.extend<Fixture>({
    // Suitest fixture
    suitest: async ({}, use) => {
        const suitest = new Suitest();

        // Use fixture
        await use(suitest);
    },
});

export { expect } from '@playwright/test';
