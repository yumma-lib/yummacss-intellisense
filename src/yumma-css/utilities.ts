import { generateClass } from '../utils/classUtil';

export const utilities = [
    // borders
    {
        classPrefix: 'rad-',
        values: [
            { classSuffix: '0', classValue: ['border-radius: 0px;'] },
            { classSuffix: '1', classValue: ['border-radius: 4px;'] },
            { classSuffix: '2', classValue: ['border-radius: 8px;'] },
            { classSuffix: '3', classValue: ['border-radius: 16px;'] },
            { classSuffix: '4', classValue: ['border-radius: 24px;'] },
            { classSuffix: '5', classValue: ['border-radius: 32px;'] },
            { classSuffix: '6', classValue: ['border-radius: 40px;'] },
            { classSuffix: '7', classValue: ['border-radius: 48px;'] },
            { classSuffix: '8', classValue: ['border-radius: 56px;'] },
            { classSuffix: 'full', classValue: ['border-radius: 100%;'] },
            { classSuffix: 'half', classValue: ['border-radius: 50%;'] }
        ]
    },
    {
        classPrefix: 'rad-bl-',
        values: [
            { classSuffix: '0', classValue: ['border-bottom-left-radius: 0px;'] },
            { classSuffix: '1', classValue: ['border-bottom-left-radius: 4px;'] },
            { classSuffix: '2', classValue: ['border-bottom-left-radius: 8px;'] },
            { classSuffix: '3', classValue: ['border-bottom-left-radius: 16px;'] },
            { classSuffix: '4', classValue: ['border-bottom-left-radius: 24px;'] },
            { classSuffix: '5', classValue: ['border-bottom-left-radius: 32px;'] },
            { classSuffix: '6', classValue: ['border-bottom-left-radius: 40px;'] },
            { classSuffix: '7', classValue: ['border-bottom-left-radius: 48px;'] },
            { classSuffix: '8', classValue: ['border-bottom-left-radius: 56px;'] },
            { classSuffix: 'full', classValue: ['border-bottom-left-radius: 100%;'] },
            { classSuffix: 'half', classValue: ['border-bottom-left-radius: 50%;'] }
        ]
    },
    {
        classPrefix: 'rad-br-',
        values: [
            { classSuffix: '0', classValue: ['border-bottom-right-radius: 0px;'] },
            { classSuffix: '1', classValue: ['border-bottom-right-radius: 4px;'] },
            { classSuffix: '2', classValue: ['border-bottom-right-radius: 8px;'] },
            { classSuffix: '3', classValue: ['border-bottom-right-radius: 16px;'] },
            { classSuffix: '4', classValue: ['border-bottom-right-radius: 24px;'] },
            { classSuffix: '5', classValue: ['border-bottom-right-radius: 32px;'] },
            { classSuffix: '6', classValue: ['border-bottom-right-radius: 40px;'] },
            { classSuffix: '7', classValue: ['border-bottom-right-radius: 48px;'] },
            { classSuffix: '8', classValue: ['border-bottom-right-radius: 56px;'] },
            { classSuffix: 'full', classValue: ['border-bottom-right-radius: 100%;'] },
            { classSuffix: 'half', classValue: ['border-bottom-right-radius: 50%;'] }
        ]
    },
    {
        classPrefix: 'rad-tl-',
        values: [
            { classSuffix: '0', classValue: ['border-top-left-radius: 0px;'] },
            { classSuffix: '1', classValue: ['border-top-left-radius: 4px;'] },
            { classSuffix: '2', classValue: ['border-top-left-radius: 8px;'] },
            { classSuffix: '3', classValue: ['border-top-left-radius: 16px;'] },
            { classSuffix: '4', classValue: ['border-top-left-radius: 24px;'] },
            { classSuffix: '5', classValue: ['border-top-left-radius: 32px;'] },
            { classSuffix: '6', classValue: ['border-top-left-radius: 40px;'] },
            { classSuffix: '7', classValue: ['border-top-left-radius: 48px;'] },
            { classSuffix: '8', classValue: ['border-top-left-radius: 56px;'] },
            { classSuffix: 'full', classValue: ['border-top-left-radius: 100%;'] },
            { classSuffix: 'half', classValue: ['border-top-left-radius: 50%;'] }
        ]
    },
    {
        classPrefix: 'rad-tr-',
        values: [
            { classSuffix: '0', classValue: ['border-top-right-radius: 0px;'] },
            { classSuffix: '1', classValue: ['border-top-right-radius: 4px;'] },
            { classSuffix: '2', classValue: ['border-top-right-radius: 8px;'] },
            { classSuffix: '3', classValue: ['border-top-right-radius: 16px;'] },
            { classSuffix: '4', classValue: ['border-top-right-radius: 24px;'] },
            { classSuffix: '5', classValue: ['border-top-right-radius: 32px;'] },
            { classSuffix: '6', classValue: ['border-top-right-radius: 40px;'] },
            { classSuffix: '7', classValue: ['border-top-right-radius: 48px;'] },
            { classSuffix: '8', classValue: ['border-top-right-radius: 56px;'] },
            { classSuffix: 'full', classValue: ['border-top-right-radius: 100%;'] },
            { classSuffix: 'half', classValue: ['border-top-right-radius: 50%;'] }
        ]
    },
    {
        classPrefix: 'b-',
        values: [
            { classSuffix: '0', classValue: ['border-width: 0px;'] },
            { classSuffix: '1', classValue: ['border-width: 1px;'] },
            { classSuffix: '2', classValue: ['border-width: 2px;'] },
            { classSuffix: '3', classValue: ['border-width: 4px;'] },
            { classSuffix: '4', classValue: ['border-width: 6px;'] },
            { classSuffix: '5', classValue: ['border-width: 8px;'] },
            { classSuffix: '6', classValue: ['border-width: 10px;'] },
            { classSuffix: '7', classValue: ['border-width: 12px;'] },
            { classSuffix: '8', classValue: ['border-width: 14px;'] }
        ]
    },
    {
        classPrefix: 'bb-',
        values: [
            { classSuffix: '0', classValue: ['border-bottom-width: 0px;'] },
            { classSuffix: '1', classValue: ['border-bottom-width: 1px;'] },
            { classSuffix: '2', classValue: ['border-bottom-width: 2px;'] },
            { classSuffix: '3', classValue: ['border-bottom-width: 4px;'] },
            { classSuffix: '4', classValue: ['border-bottom-width: 6px;'] },
            { classSuffix: '5', classValue: ['border-bottom-width: 8px;'] },
            { classSuffix: '6', classValue: ['border-bottom-width: 10px;'] },
            { classSuffix: '7', classValue: ['border-bottom-width: 12px;'] },
            { classSuffix: '8', classValue: ['border-bottom-width: 14px;'] }
        ]
    },
    {
        classPrefix: 'bl-',
        values: [
            { classSuffix: '0', classValue: ['border-left-width: 0px;'] },
            { classSuffix: '1', classValue: ['border-left-width: 1px;'] },
            { classSuffix: '2', classValue: ['border-left-width: 2px;'] },
            { classSuffix: '3', classValue: ['border-left-width: 4px;'] },
            { classSuffix: '4', classValue: ['border-left-width: 6px;'] },
            { classSuffix: '5', classValue: ['border-left-width: 8px;'] },
            { classSuffix: '6', classValue: ['border-left-width: 10px;'] },
            { classSuffix: '7', classValue: ['border-left-width: 12px;'] },
            { classSuffix: '8', classValue: ['border-left-width: 14px;'] }
        ]
    },
    {
        classPrefix: 'br-',
        values: [
            { classSuffix: '0', classValue: ['border-right-width: 0px;'] },
            { classSuffix: '1', classValue: ['border-right-width: 1px;'] },
            { classSuffix: '2', classValue: ['border-right-width: 2px;'] },
            { classSuffix: '3', classValue: ['border-right-width: 4px;'] },
            { classSuffix: '4', classValue: ['border-right-width: 6px;'] },
            { classSuffix: '5', classValue: ['border-right-width: 8px;'] },
            { classSuffix: '6', classValue: ['border-right-width: 10px;'] },
            { classSuffix: '7', classValue: ['border-right-width: 12px;'] },
            { classSuffix: '8', classValue: ['border-right-right-width: 14px;'] }
        ]
    },
    {
        classPrefix: 'bt-',
        values: [
            { classSuffix: '0', classValue: ['border-top-width: 0px;'] },
            { classSuffix: '1', classValue: ['border-top-width: 1px;'] },
            { classSuffix: '2', classValue: ['border-top-width: 2px;'] },
            { classSuffix: '3', classValue: ['border-top-width: 4px;'] },
            { classSuffix: '4', classValue: ['border-top-width: 6px;'] },
            { classSuffix: '5', classValue: ['border-top-width: 8px;'] },
            { classSuffix: '6', classValue: ['border-top-width: 10px;'] },
            { classSuffix: '7', classValue: ['border-top-width: 12px;'] },
            { classSuffix: '8', classValue: ['border-top-width: 14px;'] }
        ]
    },

    // box model
    {
        classPrefix: 'bs-',
        values: [
            { classSuffix: 'bb', classValue: ['box-sizing: border-box;'] },
            { classSuffix: 'cb', classValue: ['box-sizing: content-box;'] }
        ]
    },
    {
        classPrefix: 'dim-',
        values: [
            ...generateClass(['height', 'width'], 100, 0.25, 'rem'),
            { classSuffix: 'auto', classValue: ['height: auto;', 'width: auto;'] },
            { classSuffix: 'full', classValue: ['height: 100%;', 'width: 100%;'] },
            { classSuffix: 'half', classValue: ['height: 50%;', 'width: 50%;'] },
            { classSuffix: 'fc', classValue: ['height: fit-content;', 'width: fit-content;'] },
            { classSuffix: '1/1', classValue: ['height: 100dvh;', 'width: 100dvh;'] },
            { classSuffix: '1/2', classValue: ['height: 50dvh;', 'width: 50dvh;'] }
        ]
    },
    {
        classPrefix: 'max-dim-',
        values: [
            ...generateClass(['max-height', 'min-width'], 100, 0.25, 'rem'),
            { classSuffix: 'auto', classValue: ['max-height: auto;', 'min-width: auto;'] },
            { classSuffix: 'full', classValue: ['max-height: 100%;', 'min-width: 100%;'] },
            { classSuffix: 'half', classValue: ['max-height: 50%;', 'min-width: 50%;'] },
            { classSuffix: 'fc', classValue: ['max-height: fit-content;', 'min-width: fit-content;'] },
            { classSuffix: '1/1', classValue: ['max-height: 100dvh;', 'min-width: 100dvh;'] },
            { classSuffix: '1/2', classValue: ['max-height: 50dvh;', 'min-width: 50dvh;'] }
        ]
    },
    {
        classPrefix: 'min-dim-',
        values: [
            ...generateClass(['min-height', 'min-width'], 100, 0.25, 'rem'),
            { classSuffix: 'auto', classValue: ['min-height: auto;', 'min-width: auto;'] },
            { classSuffix: 'full', classValue: ['min-height: 100%;', 'min-width: 100%;'] },
            { classSuffix: 'half', classValue: ['min-height: 50%;', 'min-width: 50%;'] },
            { classSuffix: 'fc', classValue: ['min-height: fit-content;', 'min-width: fit-content;'] },
            { classSuffix: '1/1', classValue: ['min-height: 100dvh;', 'min-width: 100dvh;'] },
            { classSuffix: '1/2', classValue: ['min-height: 50dvh;', 'min-width: 50dvh;'] }
        ]
    },
    {
        classPrefix: 'h-',
        values: [
            ...generateClass(['height'], 100, 0.25, 'rem'),
            { classSuffix: 'auto', classValue: ['height: auto;'] },
            { classSuffix: 'full', classValue: ['height: 100%;'] },
            { classSuffix: 'half', classValue: ['height: 50%;'] },
            { classSuffix: 'fc', classValue: ['height: fit-content;'] },
            { classSuffix: '1/1', classValue: ['height: 100dvh;'] },
            { classSuffix: '1/2', classValue: ['height: 50dvh;'] }
        ]
    },
    {
        classPrefix: 'max-h-',
        values: [
            ...generateClass(['max-height'], 100, 0.25, 'rem'),
            { classSuffix: 'auto', classValue: ['max-height: auto;'] },
            { classSuffix: 'full', classValue: ['max-height: 100%;'] },
            { classSuffix: 'half', classValue: ['max-height: 50%;'] },
            { classSuffix: 'fc', classValue: ['max-height: fit-content;'] },
            { classSuffix: '1/1', classValue: ['max-height: 100dvh;'] },
            { classSuffix: '1/2', classValue: ['max-height: 50dvh;'] }
        ]
    },
    {
        classPrefix: 'min-h-',
        values: [
            ...generateClass(['min-height'], 100, 0.25, 'rem'),
            { classSuffix: 'auto', classValue: ['min-height: auto;'] },
            { classSuffix: 'full', classValue: ['min-height: 100%;'] },
            { classSuffix: 'half', classValue: ['min-height: 50%;'] },
            { classSuffix: 'fc', classValue: ['min-height: fit-content;'] },
            { classSuffix: '1/1', classValue: ['min-height: 100dvh;'] },
            { classSuffix: '1/2', classValue: ['min-height: 50dvh;'] }
        ]
    },
    {
        classPrefix: 'm-',
        values: [
            ...generateClass(['margin'], 100, 0.25, 'rem'),
            { classSuffix: 'auto', classValue: ['margin: auto;'] }
        ]
    },
    {
        classPrefix: 'mb-',
        values: [
            ...generateClass(['margin-bottom'], 100, 0.25, 'rem'),
            { classSuffix: 'auto', classValue: ['margin-bottom: auto;'] }
        ]
    },
    {
        classPrefix: 'ml-',
        values: [
            ...generateClass(['margin-left'], 100, 0.25, 'rem'),
            { classSuffix: 'auto', classValue: ['margin-left: auto;'] }
        ]
    },
    {
        classPrefix: 'mr-',
        values: [
            ...generateClass(['margin-right'], 100, 0.25, 'rem'),
            { classSuffix: 'auto', classValue: ['margin-right: auto;'] }
        ]
    },
    {
        classPrefix: 'mt-',
        values: [
            ...generateClass(['margin-top'], 100, 0.25, 'rem'),
            { classSuffix: 'auto', classValue: ['margin-top: auto;'] }
        ]
    },
    {
        classPrefix: 'mx-',
        values: [
            ...generateClass(['margin-left', 'margin-right'], 100, 0.25, 'rem'),
            { classSuffix: 'auto', classValue: ['margin-left: auto;', 'margin-right: auto;'] }
        ]
    },
    {
        classPrefix: 'my-',
        values: [
            ...generateClass(['margin-bottom', 'margin-top'], 100, 0.25, 'rem'),
            { classSuffix: 'auto', classValue: ['margin-bottom: auto;', 'margin-top: auto;'] }
        ]
    },
    {
        classPrefix: 'p-',
        values: [
            ...generateClass(['padding'], 100, 0.25, 'rem'),
            { classSuffix: 'auto', classValue: ['padding: auto;'] }
        ]
    },
    {
        classPrefix: 'pb-',
        values: [
            ...generateClass(['padding-bottom'], 100, 0.25, 'rem'),
            { classSuffix: 'auto', classValue: ['padding-bottom: auto;'] }
        ]
    },
    {
        classPrefix: 'pl-',
        values: [
            ...generateClass(['padding-left'], 100, 0.25, 'rem'),
            { classSuffix: 'auto', classValue: ['padding-left: auto;'] }
        ]
    },
    {
        classPrefix: 'pr-',
        values: [
            ...generateClass(['padding-right'], 100, 0.25, 'rem'),
            { classSuffix: 'auto', classValue: ['padding-right: auto;'] }
        ]
    },
    {
        classPrefix: 'pt-',
        values: [
            ...generateClass(['padding-top'], 100, 0.25, 'rem'),
            { classSuffix: 'auto', classValue: ['padding-top: auto;'] }
        ]
    },
    {
        classPrefix: 'px-',
        values: [
            ...generateClass(['padding-left', 'padding-right'], 100, 0.25, 'rem'),
            { classSuffix: 'auto', classValue: ['padding-left: auto;', 'padding-right: auto;'] }
        ]
    },
    {
        classPrefix: 'py-',
        values: [
            ...generateClass(['padding-bottom', 'padding-top'], 100, 0.25, 'rem'),
            { classSuffix: 'auto', classValue: ['padding-bottom: auto;', 'padding-top: auto;'] }
        ]
    },
    {
        classPrefix: 'max-w-',
        values: [
            ...generateClass(['max-width'], 100, 0.25, 'rem'),
            { classSuffix: 'auto', classValue: ['max-width: auto;'] },
            { classSuffix: 'full', classValue: ['max-width: 100%;'] },
            { classSuffix: 'half', classValue: ['max-width: 50%;'] },
            { classSuffix: 'fc', classValue: ['max-width: fit-content;'] },
            { classSuffix: '1/1', classValue: ['max-width: 100dvh;'] },
            { classSuffix: '1/2', classValue: ['max-width: 50dvh;'] }
        ]
    },
    {
        classPrefix: 'min-w-',
        values: [
            ...generateClass(['min-width'], 100, 0.25, 'rem'),
            { classSuffix: 'auto', classValue: ['min-width: auto;'] },
            { classSuffix: 'full', classValue: ['min-width: 100%;'] },
            { classSuffix: 'half', classValue: ['min-width: 50%;'] },
            { classSuffix: 'fc', classValue: ['min-width: fit-content;'] },
            { classSuffix: '1/1', classValue: ['min-width: 100dvh;'] },
            { classSuffix: '1/2', classValue: ['min-width: 50dvh;'] }
        ]
    },
    {
        classPrefix: 'w-',
        values: [
            ...generateClass(['width'], 100, 0.25, 'rem'),
            { classSuffix: 'auto', classValue: ['width: auto;'] },
            { classSuffix: 'full', classValue: ['width: 100%;'] },
            { classSuffix: 'half', classValue: ['width: 50%;'] },
            { classSuffix: 'fc', classValue: ['width: fit-content;'] },
            { classSuffix: '1/1', classValue: ['width: 100dvh;'] },
            { classSuffix: '1/2', classValue: ['width: 50dvh;'] }
        ]
    },

    // effects & filters
    {
        classPrefix: 'bs-',
        values: [
            { classSuffix: 'none', classValue: ['box-shadow: none;'] },
            { classSuffix: 'xs', classValue: ['box-shadow: 1px 3px 5px -3px rgba(0,0,0,0.1);'] },
            { classSuffix: 'sm', classValue: ['box-shadow: 1px 3px 5px -2px rgba(0,0,0,0.1);'] },
            { classSuffix: 'md', classValue: ['box-shadow: 1px 3px 5px -1px rgba(0,0,0,0.1);'] },
            { classSuffix: 'lg', classValue: ['box-shadow: 1px 3px 5px 1px rgba(0,0,0,0.1);'] },
            { classSuffix: 'xl', classValue: ['box-shadow: 1px 3px 5px 2px rgba(0,0,0,0.1);'] }
        ]
    },
    {
        classPrefix: 'o-',
        values: [
            { classSuffix: '10', classValue: ['opacity: 0.1;'] },
            { classSuffix: '20', classValue: ['opacity: 0.2;'] },
            { classSuffix: '30', classValue: ['opacity: 0.3;'] },
            { classSuffix: '40', classValue: ['opacity: 0.4;'] },
            { classSuffix: '50', classValue: ['opacity: 0.5;'] },
            { classSuffix: '6', classValue: ['opacity: 0.6;'] },
            { classSuffix: '70', classValue: ['opacity: 0.7;'] },
            { classSuffix: '80', classValue: ['opacity: 0.8;'] },
            { classSuffix: '90', classValue: ['opacity: 0.9;'] },
            { classSuffix: '100', classValue: ['opacity: 1;'] }
        ]
    },

    // flexbox & grid
    {
        classPrefix: 'fb-',
        values: [
            ...generateClass(['flex-basis'], 100, 1, 'rem'),
            { classSuffix: 'auto', classValue: ['flex-basis: auto;'] }
        ]
    },
    {
        classPrefix: 'fd-',
        values: [
            { classSuffix: 'c', classValue: ['flex-direction: column;'] },
            { classSuffix: 'cr', classValue: ['flex-direction: column-reverse;'] },
            { classSuffix: 'r', classValue: ['flex-direction: row;'] },
            { classSuffix: 'rr', classValue: ['flex-direction: row-reverse;'] }
        ]
    },
    {
        classPrefix: 'fg-',
        values: [
            { classSuffix: '0', classValue: ['flex-grow: 0;'] },
            { classSuffix: '1', classValue: ['flex-grow: 1;'] },
            { classSuffix: '2', classValue: ['flex-grow: 2;'] },
            { classSuffix: '3', classValue: ['flex-grow: 3;'] },
            { classSuffix: '4', classValue: ['flex-grow: 4;'] },
            { classSuffix: '5', classValue: ['flex-grow: 5;'] },
            { classSuffix: '6', classValue: ['flex-grow: 6;'] },
            { classSuffix: '7', classValue: ['flex-grow: 7;'] },
            { classSuffix: '8', classValue: ['flex-grow: 8;'] }
        ]
    },
    {
        classPrefix: 'fs-',
        values: [
            { classSuffix: '0', classValue: ['flex-shrink: 0;'] },
            { classSuffix: '1', classValue: ['flex-shrink: 1;'] },
            { classSuffix: '2', classValue: ['flex-shrink: 2;'] },
            { classSuffix: '3', classValue: ['flex-shrink: 3;'] },
            { classSuffix: '4', classValue: ['flex-shrink: 4;'] },
            { classSuffix: '5', classValue: ['flex-shrink: 5;'] },
            { classSuffix: '6', classValue: ['flex-shrink: 6;'] },
            { classSuffix: '7', classValue: ['flex-shrink: 7;'] },
            { classSuffix: '8', classValue: ['flex-shrink: 8;'] }
        ]
    },
    {
        classPrefix: 'fw-',
        values: [
            { classSuffix: 'nw', classValue: ['flex-wrap: nowrap;'] },
            { classSuffix: 'w', classValue: ['flex-wrap: wrap;'] },
            { classSuffix: 'wr', classValue: ['flex-wrap: wrap-reverse;'] }
        ]
    },
    {
        classPrefix: 'f-',
        values: [
            { classSuffix: '0', classValue: ['flex: 0;'] },
            { classSuffix: '1', classValue: ['flex: 1;'] },
            { classSuffix: '2', classValue: ['flex: 2;'] },
            { classSuffix: '3', classValue: ['flex: 3;'] },
            { classSuffix: '4', classValue: ['flex: 4;'] },
            { classSuffix: '5', classValue: ['flex: 5;'] },
            { classSuffix: '6', classValue: ['flex: 6;'] },
            { classSuffix: '7', classValue: ['flex: 7;'] },
            { classSuffix: '8', classValue: ['flex: 8;'] },
            { classSuffix: 'auto', classValue: ['flex: auto;'] },
            { classSuffix: 'full', classValue: ['flex: 100%;'] },
            { classSuffix: 'half', classValue: ['flex: 50%;'] }
        ]
    },
    {
        classPrefix: 'gac-',
        values: [
            { classSuffix: 'min', classValue: ['grid-auto-columns: min-content;'] },
            { classSuffix: 'max', classValue: ['grid-auto-columns: max-content;'] },
            { classSuffix: 'auto', classValue: ['grid-auto-columns: auto;'] }
        ]
    },
    {
        classPrefix: 'gaf-',
        values: [
            { classSuffix: 'r', classValue: ['grid-auto-flow: row;'] },
            { classSuffix: 'c', classValue: ['grid-auto-flow: column;'] },
            { classSuffix: 'd', classValue: ['grid-auto-flow: dense;'] }
        ]
    },
    {
        classPrefix: 'gar-',
        values: [
            { classSuffix: 'min', classValue: ['grid-auto-rows: min-content;'] },
            { classSuffix: 'max', classValue: ['grid-auto-rows: max-content;'] },
            { classSuffix: 'auto', classValue: ['grid-auto-rows: auto;'] }
        ]
    },
    {
        classPrefix: 'gtc-',
        values: [
            { classSuffix: '1', classValue: ['grid-template-columns: repeat(1, minmax(0, 1fr));'] },
            { classSuffix: '2', classValue: ['grid-template-columns: repeat(2, minmax(0, 1fr));'] },
            { classSuffix: '3', classValue: ['grid-template-columns: repeat(3, minmax(0, 1fr));'] },
            { classSuffix: '4', classValue: ['grid-template-columns: repeat(4, minmax(0, 1fr));'] },
            { classSuffix: '5', classValue: ['grid-template-columns: repeat(5, minmax(0, 1fr));'] },
            { classSuffix: '6', classValue: ['grid-template-columns: repeat(6, minmax(0, 1fr));'] },
            { classSuffix: '7', classValue: ['grid-template-columns: repeat(7, minmax(0, 1fr));'] },
            { classSuffix: '8', classValue: ['grid-template-columns: repeat(8, minmax(0, 1fr));'] },
            { classSuffix: '9', classValue: ['grid-template-columns: repeat(9, minmax(0, 1fr));'] },
            { classSuffix: '10', classValue: ['grid-template-columns: repeat(10, minmax(0, 1fr));'] },
            { classSuffix: '11', classValue: ['grid-template-columns: repeat(11, minmax(0, 1fr));'] }
        ]
    },
    {
        classPrefix: 'gtr-',
        values: [
            { classSuffix: '1', classValue: ['grid-template-rows: repeat(1, minmax(0, 1fr));'] },
            { classSuffix: '2', classValue: ['grid-template-rows: repeat(2, minmax(0, 1fr));'] },
            { classSuffix: '3', classValue: ['grid-template-rows: repeat(3, minmax(0, 1fr));'] },
            { classSuffix: '4', classValue: ['grid-template-rows: repeat(4, minmax(0, 1fr));'] },
            { classSuffix: '5', classValue: ['grid-template-rows: repeat(5, minmax(0, 1fr));'] },
            { classSuffix: '6', classValue: ['grid-template-rows: repeat(6, minmax(0, 1fr));'] },
            { classSuffix: '7', classValue: ['grid-template-rows: repeat(7, minmax(0, 1fr));'] },
            { classSuffix: '8', classValue: ['grid-template-rows: repeat(8, minmax(0, 1fr));'] },
            { classSuffix: '9', classValue: ['grid-template-rows: repeat(9, minmax(0, 1fr));'] },
            { classSuffix: '10', classValue: ['grid-template-rows: repeat(10, minmax(0, 1fr));'] },
            { classSuffix: '11', classValue: ['grid-template-rows: repeat(11, minmax(0, 1fr));'] },
            { classSuffix: '12', classValue: ['grid-template-rows: repeat(12, minmax(0, 1fr));'] },
            { classSuffix: '13', classValue: ['grid-template-rows: repeat(13, minmax(0, 1fr));'] },
            { classSuffix: '14', classValue: ['grid-template-rows: repeat(14, minmax(0, 1fr));'] },
            { classSuffix: '15', classValue: ['grid-template-rows: repeat(15, minmax(0, 1fr));'] },
            { classSuffix: '16', classValue: ['grid-template-rows: repeat(16, minmax(0, 1fr));'] }
        ]
    },
    {
        classPrefix: 'ac-',
        values: [
            { classSuffix: 'c', classValue: ['align-content: center;'] },
            { classSuffix: 's', classValue: ['align-content: start;'] },
            { classSuffix: 'e', classValue: ['align-content: end;'] },
            { classSuffix: 'fs', classValue: ['align-content: flex-start;'] },
            { classSuffix: 'fe', classValue: ['align-content: flex-end;'] },
            { classSuffix: 'n', classValue: ['align-content: normal;'] },
            { classSuffix: 'sb', classValue: ['align-content: space-between;'] },
            { classSuffix: 'sa', classValue: ['align-content: space-around;'] },
            { classSuffix: 'se', classValue: ['align-content: space-evenly;'] },
            { classSuffix: 'stretch', classValue: ['align-content: stretch;'] }
        ]
    },
    {
        classPrefix: 'ai-',
        values: [
            { classSuffix: 'n', classValue: ['align-items: normal;'] },
            { classSuffix: 'stretch', classValue: ['align-items: stretch;'] },
            { classSuffix: 'c', classValue: ['align-items: center;'] },
            { classSuffix: 'start', classValue: ['align-items: start;'] },
            { classSuffix: 'e', classValue: ['align-items: end;'] },
            { classSuffix: 'fs', classValue: ['align-items: flex-start;'] },
            { classSuffix: 'fe', classValue: ['align-items: flex-end;'] }
        ]
    },
    {
        classPrefix: 'as-',
        values: [
            { classSuffix: 'auto', classValue: ['align-self: auto;'] },
            { classSuffix: 'n', classValue: ['align-self: normal;'] },
            { classSuffix: 'c', classValue: ['align-self: center;'] },
            { classSuffix: 'start', classValue: ['align-self: start;'] },
            { classSuffix: 'e', classValue: ['align-self: end;'] },
            { classSuffix: 'fs', classValue: ['align-self: flex-start;'] },
            { classSuffix: 'fe', classValue: ['align-self: flex-end;'] },
            { classSuffix: 'stretch', classValue: ['align-self: stretch;'] }
        ]
    },
    {
        classPrefix: 'cg-',
        values: [
            { classSuffix: '1', classValue: ['column-gap: 0.25rem;'] },
            { classSuffix: '2', classValue: ['column-gap: 0.5rem;'] },
            { classSuffix: '3', classValue: ['column-gap: 0.75rem;'] },
            { classSuffix: '4', classValue: ['column-gap: 1rem;'] },
            { classSuffix: '5', classValue: ['column-gap: 1.25rem;'] },
            { classSuffix: '6', classValue: ['column-gap: 1.5rem;'] },
            { classSuffix: '7', classValue: ['column-gap: 1.75rem;'] },
            { classSuffix: '8', classValue: ['column-gap: 2rem;'] },
            { classSuffix: '9', classValue: ['column-gap: 2.25rem;'] },
            { classSuffix: '10', classValue: ['column-gap: 2.5rem;'] },
            { classSuffix: '11', classValue: ['column-gap: 2.75rem;'] },
            { classSuffix: '12', classValue: ['column-gap: 3rem;'] },
            { classSuffix: '13', classValue: ['column-gap: 3.25rem;'] },
            { classSuffix: '14', classValue: ['column-gap: 3.5rem;'] },
            { classSuffix: '15', classValue: ['column-gap: 3.75rem;'] },
            { classSuffix: '16', classValue: ['column-gap: 4rem;'] }
        ]
    },
    {
        classPrefix: 'jc-',
        values: [
            { classSuffix: 'c', classValue: ['justify-content: center;'] },
            { classSuffix: 's', classValue: ['justify-content: start;'] },
            { classSuffix: 'e', classValue: ['justify-content: end;'] },
            { classSuffix: 'fs', classValue: ['justify-content: flex-start;'] },
            { classSuffix: 'fe', classValue: ['justify-content: flex-end;'] },
            { classSuffix: 'l', classValue: ['justify-content: left;'] },
            { classSuffix: 'r', classValue: ['justify-content: right;'] },
            { classSuffix: 'n', classValue: ['justify-content: normal;'] },
            { classSuffix: 'sb', classValue: ['justify-content: space-between;'] },
            { classSuffix: 'sa', classValue: ['justify-content: space-around;'] },
            { classSuffix: 'se', classValue: ['justify-content: space-evenly;'] },
            { classSuffix: 'stretch', classValue: ['justify-content: stretch;'] }
        ]
    },
    {
        classPrefix: 'ji-',
        values: [
            { classSuffix: 'c', classValue: ['justify-items: center;'] },
            { classSuffix: 's', classValue: ['justify-items: start;'] },
            { classSuffix: 'e', classValue: ['justify-items: end;'] },
            { classSuffix: 'fs', classValue: ['justify-items: flex-start;'] },
            { classSuffix: 'fe', classValue: ['justify-items: flex-end;'] },
            { classSuffix: 'l', classValue: ['justify-items: left;'] },
            { classSuffix: 'r', classValue: ['justify-items: right;'] },
            { classSuffix: 'n', classValue: ['justify-items: normal;'] },
            { classSuffix: 'sb', classValue: ['justify-items: space-between;'] },
            { classSuffix: 'sa', classValue: ['justify-items: space-around;'] },
            { classSuffix: 'se', classValue: ['justify-items: space-evenly;'] },
            { classSuffix: 'stretch', classValue: ['justify-items: stretch;'] }
        ]
    },
    {
        classPrefix: 'js-',
        values: [
            { classSuffix: 'auto', classValue: ['justify-self: auto;'] },
            { classSuffix: 'n', classValue: ['justify-self: normal;'] },
            { classSuffix: 'stretch', classValue: ['justify-self: stretch;'] },
            { classSuffix: 'c', classValue: ['justify-self: center;'] },
            { classSuffix: 's', classValue: ['justify-self: start;'] },
            { classSuffix: 'e', classValue: ['justify-self: end;'] },
            { classSuffix: 'fs', classValue: ['justify-self: flex-start;'] },
            { classSuffix: 'fe', classValue: ['justify-self: flex-end;'] },
            { classSuffix: 'l', classValue: ['justify-self: left;'] },
            { classSuffix: 'r', classValue: ['justify-self: right;'] }
        ]
    },
    {
        classPrefix: 'rg-',
        values: [
            { classSuffix: '1', classValue: ['row-gap: 0.25rem;'] },
            { classSuffix: '2', classValue: ['row-gap: 0.5rem;'] },
            { classSuffix: '3', classValue: ['row-gap: 0.75rem;'] },
            { classSuffix: '4', classValue: ['row-gap: 1rem;'] },
            { classSuffix: '5', classValue: ['row-gap: 1.25rem;'] },
            { classSuffix: '6', classValue: ['row-gap: 1.5rem;'] },
            { classSuffix: '7', classValue: ['row-gap: 1.75rem;'] },
            { classSuffix: '8', classValue: ['row-gap: 2rem;'] },
            { classSuffix: '9', classValue: ['row-gap: 2.25rem;'] },
            { classSuffix: '10', classValue: ['row-gap: 2.5rem;'] },
            { classSuffix: '11', classValue: ['row-gap: 2.75rem;'] },
            { classSuffix: '12', classValue: ['row-gap: 3rem;'] },
            { classSuffix: '13', classValue: ['row-gap: 3.25rem;'] },
            { classSuffix: '14', classValue: ['row-gap: 3.5rem;'] },
            { classSuffix: '15', classValue: ['row-gap: 3.75rem;'] },
            { classSuffix: '16', classValue: ['row-gap: 4rem;'] }
        ]
    },

    // miscellaneous
    {
        classPrefix: 'a-',
        values: [
            { classSuffix: 'none', classValue: ['appearance: none;'] },
            { classSuffix: 'auto', classValue: ['appearance: auto;'] }
        ]
    },
    {
        classPrefix: 'c-',
        values: [
            { classSuffix: 'auto', classValue: ['cursor: auto;'] },
            { classSuffix: 'p', classValue: ['cursor: pointer;'] },
            { classSuffix: 't', classValue: ['cursor: text;'] },
            { classSuffix: 'm', classValue: ['cursor: move;'] },
            { classSuffix: 'na', classValue: ['cursor: not-allowed;'] },
            { classSuffix: 'c', classValue: ['cursor: crosshair;'] },
            { classSuffix: 'h', classValue: ['cursor: help;'] },
            { classSuffix: 'er', classValue: ['cursor: e-resize;'] },
            { classSuffix: 'nr', classValue: ['cursor: n-resize;'] },
            { classSuffix: 'w', classValue: ['cursor: wait;'] }
        ]
    },
    {
        classPrefix: 'pe-',
        values: [
            { classSuffix: 'auto', classValue: ['pointer-events: auto;'] },
            { classSuffix: 'none', classValue: ['pointer-events: none;'] }
        ]
    },
    {
        classPrefix: 'r-',
        values: [
            { classSuffix: 'b', classValue: ['resize: both;'] },
            { classSuffix: 'h', classValue: ['resize: horizontal;'] },
            { classSuffix: 'none', classValue: ['resize: none;'] },
            { classSuffix: 'v', classValue: ['resize: vertical;'] }
        ]
    },
    {
        classPrefix: 'us-',
        values: [
            { classSuffix: 'auto', classValue: ['user-select: auto;'] },
            { classSuffix: 'none', classValue: ['user-select: none;'] }
        ]
    },

    // positioning
    {
        classPrefix: 'cols-',
        values: [
            { classSuffix: '1', classValue: ['columns: 1;'] },
            { classSuffix: '2', classValue: ['columns: 2;'] },
            { classSuffix: '3', classValue: ['columns: 3;'] },
            { classSuffix: '4', classValue: ['columns: 4;'] },
            { classSuffix: '5', classValue: ['columns: 5;'] },
            { classSuffix: '6', classValue: ['columns: 6;'] },
            { classSuffix: '7', classValue: ['columns: 7;'] },
            { classSuffix: '8', classValue: ['columns: 8;'] },
            { classSuffix: '9', classValue: ['columns: 9;'] },
            { classSuffix: '10', classValue: ['columns: 10;'] },
            { classSuffix: '11', classValue: ['columns: 11;'] },
            { classSuffix: '12', classValue: ['columns: 12;'] },
            { classSuffix: '13', classValue: ['columns: 13;'] },
            { classSuffix: '14', classValue: ['columns: 14;'] },
            { classSuffix: '15', classValue: ['columns: 15;'] },
            { classSuffix: '16', classValue: ['columns: 16;'] }
        ]
    },
    {
        classPrefix: 'dir-b-',
        values: [
            { classSuffix: '0', classValue: ['bottom: 0rem;'] },
            { classSuffix: '1', classValue: ['bottom: 1rem;'] },
            { classSuffix: '2', classValue: ['bottom: 2rem;'] },
            { classSuffix: '3', classValue: ['bottom: 4rem;'] },
            { classSuffix: '4', classValue: ['bottom: 6rem;'] },
            { classSuffix: '5', classValue: ['bottom: 8rem;'] },
            { classSuffix: '6', classValue: ['bottom: 10rem;'] },
            { classSuffix: '7', classValue: ['bottom: 12rem;'] },
            { classSuffix: '8', classValue: ['bottom: 14rem;'] },
            { classSuffix: '9', classValue: ['bottom: 16rem;'] },
            { classSuffix: '10', classValue: ['bottom: 18rem;'] },
            { classSuffix: '11', classValue: ['bottom: 20rem;'] },
            { classSuffix: '12', classValue: ['bottom: 22rem;'] },
            { classSuffix: '13', classValue: ['bottom: 24rem;'] },
            { classSuffix: '14', classValue: ['bottom: 26rem;'] },
            { classSuffix: '15', classValue: ['bottom: 28rem;'] },
            { classSuffix: '16', classValue: ['bottom: 30rem;'] },
            { classSuffix: 'none', classValue: ['bottom: none;'] }
        ]
    },
    {
        classPrefix: 'dir-i-',
        values: [
            { classSuffix: '0', classValue: ['inset: 0rem;'] },
            { classSuffix: '1', classValue: ['inset: 1rem;'] },
            { classSuffix: '2', classValue: ['inset: 2rem;'] },
            { classSuffix: '3', classValue: ['inset: 4rem;'] },
            { classSuffix: '4', classValue: ['inset: 6rem;'] },
            { classSuffix: '5', classValue: ['inset: 8rem;'] },
            { classSuffix: '6', classValue: ['inset: 10rem;'] },
            { classSuffix: '7', classValue: ['inset: 12rem;'] },
            { classSuffix: '8', classValue: ['inset: 14rem;'] },
            { classSuffix: '9', classValue: ['inset: 16rem;'] },
            { classSuffix: '10', classValue: ['inset: 18rem;'] },
            { classSuffix: '11', classValue: ['inset: 20rem;'] },
            { classSuffix: '12', classValue: ['inset: 22rem;'] },
            { classSuffix: '13', classValue: ['inset: 24rem;'] },
            { classSuffix: '14', classValue: ['inset: 26rem;'] },
            { classSuffix: '15', classValue: ['inset: 28rem;'] },
            { classSuffix: '16', classValue: ['inset: 30rem;'] },
            { classSuffix: 'none', classValue: ['inset: none;'] }
        ]
    },
    {
        classPrefix: 'dir-l-',
        values: [
            { classSuffix: '0', classValue: ['left: 0rem;'] },
            { classSuffix: '1', classValue: ['left: 1rem;'] },
            { classSuffix: '2', classValue: ['left: 2rem;'] },
            { classSuffix: '3', classValue: ['left: 4rem;'] },
            { classSuffix: '4', classValue: ['left: 6rem;'] },
            { classSuffix: '5', classValue: ['left: 8rem;'] },
            { classSuffix: '6', classValue: ['left: 10rem;'] },
            { classSuffix: '7', classValue: ['left: 12rem;'] },
            { classSuffix: '8', classValue: ['left: 14rem;'] },
            { classSuffix: '9', classValue: ['left: 16rem;'] },
            { classSuffix: '10', classValue: ['left: 18rem;'] },
            { classSuffix: '11', classValue: ['left: 20rem;'] },
            { classSuffix: '12', classValue: ['left: 22rem;'] },
            { classSuffix: '13', classValue: ['left: 24rem;'] },
            { classSuffix: '14', classValue: ['left: 26rem;'] },
            { classSuffix: '15', classValue: ['left: 28rem;'] },
            { classSuffix: '16', classValue: ['left: 30rem;'] },
            { classSuffix: 'none', classValue: ['left: none;'] }
        ]
    },
    {
        classPrefix: 'dir-r-',
        values: [
            { classSuffix: '0', classValue: ['right: 0rem;'] },
            { classSuffix: '1', classValue: ['right: 1rem;'] },
            { classSuffix: '2', classValue: ['right: 2rem;'] },
            { classSuffix: '3', classValue: ['right: 4rem;'] },
            { classSuffix: '4', classValue: ['right: 6rem;'] },
            { classSuffix: '5', classValue: ['right: 8rem;'] },
            { classSuffix: '6', classValue: ['right: 10rem;'] },
            { classSuffix: '7', classValue: ['right: 12rem;'] },
            { classSuffix: '8', classValue: ['right: 14rem;'] },
            { classSuffix: '9', classValue: ['right: 16rem;'] },
            { classSuffix: '10', classValue: ['right: 18rem;'] },
            { classSuffix: '11', classValue: ['right: 20rem;'] },
            { classSuffix: '12', classValue: ['right: 22rem;'] },
            { classSuffix: '13', classValue: ['right: 24rem;'] },
            { classSuffix: '14', classValue: ['right: 26rem;'] },
            { classSuffix: '15', classValue: ['right: 28rem;'] },
            { classSuffix: '16', classValue: ['right: 30rem;'] },
            { classSuffix: 'none', classValue: ['right: none;'] }
        ]
    },
    {
        classPrefix: 'dir-t-',
        values: [
            { classSuffix: '0', classValue: ['top: 0rem;'] },
            { classSuffix: '1', classValue: ['top: 1rem;'] },
            { classSuffix: '2', classValue: ['top: 2rem;'] },
            { classSuffix: '3', classValue: ['top: 4rem;'] },
            { classSuffix: '4', classValue: ['top: 6rem;'] },
            { classSuffix: '5', classValue: ['top: 8rem;'] },
            { classSuffix: '6', classValue: ['top: 10rem;'] },
            { classSuffix: '7', classValue: ['top: 12rem;'] },
            { classSuffix: '8', classValue: ['top: 14rem;'] },
            { classSuffix: '9', classValue: ['top: 16rem;'] },
            { classSuffix: '10', classValue: ['top: 18rem;'] },
            { classSuffix: '11', classValue: ['top: 20rem;'] },
            { classSuffix: '12', classValue: ['top: 22rem;'] },
            { classSuffix: '13', classValue: ['top: 24rem;'] },
            { classSuffix: '14', classValue: ['top: 26rem;'] },
            { classSuffix: '15', classValue: ['top: 28rem;'] },
            { classSuffix: '16', classValue: ['top: 30rem;'] },
            { classSuffix: 'none', classValue: ['top: none;'] }
        ]
    },
    {
        classPrefix: 'd-',
        values: [
            { classSuffix: 'b', classValue: ['display: block;'] },
            { classSuffix: 'i', classValue: ['display: inline;'] },
            { classSuffix: 'ib', classValue: ['display: inline-block;'] },
            { classSuffix: 'f', classValue: ['display: flex;'] },
            { classSuffix: 'if', classValue: ['display: inline-flex;'] },
            { classSuffix: 'g', classValue: ['display: grid;'] },
            { classSuffix: 'fr', classValue: ['display: flow-root;'] },
            { classSuffix: 'none', classValue: ['display: none;'] }
        ]
    },
    {
        classPrefix: 'f-',
        values: [
            { classSuffix: 'none', classValue: ['float: none;'] },
            { classSuffix: 'l', classValue: ['float: left;'] },
            { classSuffix: 'r', classValue: ['float: right;'] },
            { classSuffix: 'is', classValue: ['float: inline-start;'] },
            { classSuffix: 'ie', classValue: ['float: inline-end;'] }
        ]
    },
    {
        classPrefix: 'ovf-',
        values: [
            { classSuffix: 'auto', classValue: ['overflow: auto;'] },
            { classSuffix: 'c', classValue: ['overflow: clip;'] },
            { classSuffix: 'h', classValue: ['overflow: hidden;'] },
            { classSuffix: 's', classValue: ['overflow: scroll;'] },
            { classSuffix: 'v', classValue: ['overflow: visible;'] }
        ]
    },
    {
        classPrefix: 'pos-',
        values: [
            { classSuffix: 'a', classValue: ['position: absolute;'] },
            { classSuffix: 'f', classValue: ['position: fixed;'] },
            { classSuffix: 'r', classValue: ['position: relative;'] },
            { classSuffix: 'static', classValue: ['position: static;'] },
            { classSuffix: 'sticky', classValue: ['position: sticky;'] }
        ]
    },
    {
        classPrefix: 'zi-',
        values: [
            { classSuffix: '0', classValue: ['z-index: 0;'] },
            { classSuffix: '10', classValue: ['z-index: 10;'] },
            { classSuffix: '20', classValue: ['z-index: 20;'] },
            { classSuffix: '30', classValue: ['z-index: 30;'] },
            { classSuffix: '40', classValue: ['z-index: 40;'] },
            { classSuffix: '50', classValue: ['z-index: 50;'] },
            { classSuffix: '60', classValue: ['z-index: 60;'] },
            { classSuffix: '70', classValue: ['z-index: 70;'] },
            { classSuffix: '80', classValue: ['z-index: 80;'] },
            { classSuffix: '90', classValue: ['z-index: 90;'] },
            { classSuffix: 'auto', classValue: ['z-index: auto;'] }
        ]
    },

    // typography
    {
        classPrefix: 'ff-',
        values: [
            { classSuffix: 'c', classValue: ['font-family: Charter, Cambria, serif;'] },
            { classSuffix: 'm', classValue: ['font-family: ui-monospace, Consolas, monospace;'] },
            { classSuffix: 's', classValue: ['font-family: system-ui, sans-serif;'] }
        ]
    },
    {
        classPrefix: 'fs-',
        values: [
            { classSuffix: 'xs', classValue: ['font-size: 12px;'] },
            { classSuffix: 'sm', classValue: ['font-size: 14.4px;'] },
            { classSuffix: 'md', classValue: ['font-size: 16px;'] },
            { classSuffix: 'lg', classValue: ['font-size: 19.2px;'] },
            { classSuffix: 'xl', classValue: ['font-size: 23.04px;'] },
            { classSuffix: '2xl', classValue: ['font-size: 30.08px;'] },
            { classSuffix: '3xl', classValue: ['font-size: 35.52px;'] },
            { classSuffix: '6xl', classValue: ['font-size: 58.56px;'] }
        ]
    },
    {
        classPrefix: 'fw-',
        values: [
            { classSuffix: '100', classValue: ['font-weight: 100;'] },
            { classSuffix: '200', classValue: ['font-weight: 200;'] },
            { classSuffix: '300', classValue: ['font-weight: 300;'] },
            { classSuffix: '400', classValue: ['font-weight: 400;'] },
            { classSuffix: '500', classValue: ['font-weight: 500;'] },
            { classSuffix: '600', classValue: ['font-weight: 600;'] },
            { classSuffix: '700', classValue: ['font-weight: 700;'] },
            { classSuffix: '800', classValue: ['font-weight: 800;'] },
            { classSuffix: '900', classValue: ['font-weight: 900;'] }
        ]
    },
    {
        classPrefix: 'lh-',
        values: [
            { classSuffix: '1', classValue: ['line-height: 1;'] },
            { classSuffix: '2', classValue: ['line-height: 1.25;'] },
            { classSuffix: '3', classValue: ['line-height: 1.375;'] },
            { classSuffix: '4', classValue: ['line-height: 1.5;'] },
            { classSuffix: '5', classValue: ['line-height: 1.625;'] },
            { classSuffix: '6', classValue: ['line-height: 2;'] }
        ]
    },
    {
        classPrefix: 'lst-',
        values: [
            { classSuffix: 'd', classValue: ['list-style-type: disc;'] },
            { classSuffix: 'c', classValue: ['list-style-type: circle;'] },
            { classSuffix: 's', classValue: ['list-style-type: square;'] }
        ]
    },
    {
        classPrefix: 'ta-',
        values: [
            { classSuffix: 's', classValue: ['text-align: start;'] },
            { classSuffix: 'e', classValue: ['text-align: end;'] },
            { classSuffix: 'l', classValue: ['text-align: left;'] },
            { classSuffix: 'r', classValue: ['text-align: right;'] },
            { classSuffix: 'c', classValue: ['text-align: center;'] },
            { classSuffix: 'j', classValue: ['text-align: justify;'] },
            { classSuffix: 'ja', classValue: ['text-align: justify-all;'] },
            { classSuffix: 'mp', classValue: ['text-align: match-parent;'] }
        ]
    },
    {
        classPrefix: 'tdl-',
        values: [
            { classSuffix: 'none', classValue: ['text-decoration-line: none;'] },
            { classSuffix: 'u', classValue: ['text-decoration-line: underline;'] },
            { classSuffix: 'o', classValue: ['text-decoration-line: overline;'] },
            { classSuffix: 'lt', classValue: ['text-decoration-line: line-through;'] }
        ]
    },
    {
        classPrefix: 'td-',
        values: [
            { classSuffix: 'u', classValue: ['text-decoration: underline;'] },
            { classSuffix: 'none', classValue: ['text-decoration: none;'] }
        ]
    },
    {
        classPrefix: 'ow-',
        values: [
            { classSuffix: 'bw', classValue: ['overflow-wrap: break-word;'] },
            { classSuffix: 'ka', classValue: ['overflow-wrap: keep-all;'] },
            { classSuffix: 'n', classValue: ['overflow-wrap: normal;'] }
        ]
    },

    // other utilities
    {
        classPrefix: 'og-',
        values: [
            { classSuffix: '0', classValue: ['padding: 0;', 'margin-left: 0px;', 'margin-right: 0px;'] },
            { classSuffix: '1', classValue: ['padding: 10;', 'margin-left: -10px;', 'margin-right: -10px;'] },
            { classSuffix: '2', classValue: ['padding: 20;', 'margin-left: -20px;', 'margin-right: -20px;'] },
            { classSuffix: '3', classValue: ['padding: 30;', 'margin-left: -30px;', 'margin-right: -30px;'] },
            { classSuffix: '4', classValue: ['padding: 40;', 'margin-left: -40px;', 'margin-right: -40px;'] },
            { classSuffix: '5', classValue: ['padding: 50;', 'margin-left: -50px;', 'margin-right: -50px;'] },
            { classSuffix: '6', classValue: ['padding: 60;', 'margin-left: -60px;', 'margin-right: -60px;'] }
        ]
    },
    {
        classPrefix: 'col-',
        values: [
            { classSuffix: '1', classValue: ['box-sizing: border-box;', 'flex-grow: 0;', 'width: 8.3333333333%;'] },
            { classSuffix: '2', classValue: ['box-sizing: border-box;', 'flex-grow: 0;', 'width: 16.6666666667%;'] },
            { classSuffix: '3', classValue: ['box-sizing: border-box;', 'flex-grow: 0;', 'width: 25%;'] },
            { classSuffix: '4', classValue: ['box-sizing: border-box;', 'flex-grow: 0;', 'width: 33.3333333333%;'] },
            { classSuffix: '5', classValue: ['box-sizing: border-box;', 'flex-grow: 0;', 'width: 41.6666666667%;'] },
            { classSuffix: '6', classValue: ['box-sizing: border-box;', 'flex-grow: 0;', 'width: 50%;'] },
            { classSuffix: '7', classValue: ['box-sizing: border-box;', 'flex-grow: 0;', 'width: 58.3333333333%;'] },
            { classSuffix: '8', classValue: ['box-sizing: border-box;', 'flex-grow: 0;', 'width: 66.6666666667%;'] },
            { classSuffix: '9', classValue: ['box-sizing: border-box;', 'flex-grow: 0;', 'width: 75%;'] },
            { classSuffix: '10', classValue: ['box-sizing: border-box;', 'flex-grow: 0;', 'width: 83.3333333333%;'] },
            { classSuffix: '11', classValue: ['box-sizing: border-box;', 'flex-grow: 0;', 'width: 91.6666666667%;'] },
            { classSuffix: '12', classValue: ['box-sizing: border-box;', 'flex-grow: 0;', 'width: 100%;'] }
        ]
    },
    // {
    //     classPrefix: 'row',
    //     values: [
    //         { classSuffix: 'row', classValue: ['display: flex;', 'flex-flow: row wrap;'] }
    //     ]
    // },
    // {
    //     classPrefix: 'cnn',
    //     values: [
    //         { classSuffix: 'cnn', classValue: ['width: 100%;', 'max-width: 1200px;', 'margin: 0 auto;', 'padding: 0 20px;', 'box-sizing: border-box;'] }
    //     ]
    // },
    // {
    //     classPrefix: 'ins',
    //     values: [
    //         { classSuffix: 'ins', classValue: ['align-items: center;', 'display: flex;', 'justify-content: center;'] }
    //     ]
    // }
];