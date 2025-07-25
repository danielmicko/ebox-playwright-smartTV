import { activeEnv } from '../../playwright.config';

export function getSelector(selectors: Record<string, Record<string, string>>, name: string): string {
    const entry = selectors[name];
    const selector = entry?.[activeEnv] || entry?.default;

    if (!selector) {
        throw new Error(`Selector for '${name}' not found for platform '${activeEnv}'`);
    }

    return selector;
}
