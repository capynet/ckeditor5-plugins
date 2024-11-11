declare const getDesignLink: (nodeId: string) => string;
declare const getRelatedLinksSections: (figmaNodeId: string, paragraphName: string, demoPath: string) => {
    title: string;
    links: {
        text: string;
        url: string;
        description: string;
    }[];
}[];
export { getDesignLink, getRelatedLinksSections };
//# sourceMappingURL=links.d.ts.map