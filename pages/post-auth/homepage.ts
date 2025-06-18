import {getSelector} from '../../framework/utils/helpers';

export class Homepage{

    private selectors = {
        homepageVisible: {
            default: '#mainLayout',
        }
    }

    getSelector(name: keyof typeof this.selectors): string {
        return getSelector(this.selectors, name);
    }

    readonly homepageVisible = this.getSelector('homepageVisible')

}