/// <reference types="webpack-env" />
declare type generateUUIDType = (id?: string) => string;
declare type getButtonColorsType = (themeColors: {
    [key: string]: string;
}) => {
    [key: string]: string;
};
declare type htmlToElementType = (value: {
    html: string;
}) => HTMLElement;
declare type querySelectorHasType = (value: {
    context?: HTMLElement;
    parent: string;
    child: string;
}) => HTMLElement[];
declare type getStyleNumberType = (value: {
    el: HTMLElement;
    styleName: keyof CSSStyleDeclaration;
}) => number;
declare type getAbsoluteHeightType = (value: {
    el: HTMLElement;
}) => number;
declare type lockBodyScrollType = (el: HTMLElement) => void;
declare type unlockBodyScrollType = (el: HTMLElement) => void;
declare type requireFileByNameType = (value: {
    context: __WebpackModuleApi.RequireContext;
    name: string;
}) => string | undefined;
declare type getFileNamesType = (value: {
    context: __WebpackModuleApi.RequireContext;
}) => string[];
declare type getFileNamesWithFolderCategoryType = (value: {
    context: __WebpackModuleApi.RequireContext;
}) => {
    [key: string]: string[];
};
export declare const generateUUID: generateUUIDType;
export declare const getButtonColors: getButtonColorsType;
export declare const htmlToElement: htmlToElementType;
export declare const querySelectorHas: querySelectorHasType;
export declare const getStyleNumber: getStyleNumberType;
export declare const getAbsoluteHeight: getAbsoluteHeightType;
export declare const lockBodyScroll: lockBodyScrollType;
export declare const unlockBodyScroll: unlockBodyScrollType;
export declare const requireFileByName: requireFileByNameType;
export declare const getFileNames: getFileNamesType;
export declare const getFileNamesWithFolderCategory: getFileNamesWithFolderCategoryType;
export declare const highlightSnippetInText: (text: string, snippet: string, highlightClass: string) => string | import("lit-html").TemplateResult<1>;
export declare const keepOnScreen: (container: HTMLElement, element: HTMLElement, screenPadding: number, clear?: boolean | undefined, defaultPosition?: string | undefined) => void;
export declare const outsideClickListener: (element: HTMLElement, callback: () => void) => void;
export declare const debounce: (func: (args: any | any[]) => void, wait: number) => (this: any, ...args: any) => void;
export {};
//# sourceMappingURL=index.d.ts.map