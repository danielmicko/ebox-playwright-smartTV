import {getSelector} from '../../framework/utils/helpers';

export class Profiles {
    private selectors = {
        profileTile: {
            default: '.profile .name',
        }
    }

    getSelector(name: keyof typeof this.selectors): string {
        return getSelector(this.selectors, name);
    }

    // Locators
    readonly profileTile = this.getSelector('profileTile');
}