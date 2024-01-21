export const getDiscount = (weddingSessionDiscount: number, blurayPackageDiscount: number, twoDayEventDiscount: number) => {
    return Math.max(...[weddingSessionDiscount, blurayPackageDiscount, twoDayEventDiscount], 0);
};
