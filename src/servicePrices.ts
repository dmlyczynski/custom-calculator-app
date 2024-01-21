export interface ServicePrices {
    [year: number]: {
        photography: number;
        videoRecording: number;
        photographyAndVideo: number;
        weddingSession: number;
        extraBluRay: number;
        twoDayEventHandling: number;
    };
}

export const servicePrices: ServicePrices = {
    2020: {
        photography: 1700,
        videoRecording: 1700,
        photographyAndVideo: 2200,
        weddingSession: 600,
        extraBluRay: 300,
        twoDayEventHandling: 400,
    },
    2021: {
        photography: 1800,
        videoRecording: 1800,
        photographyAndVideo: 2300,
        weddingSession: 600,
        extraBluRay: 300,
        twoDayEventHandling: 400,
    },
    2022: {
        photography: 1900,
        videoRecording: 1900,
        photographyAndVideo: 2500,
        weddingSession: 600,
        extraBluRay: 300,
        twoDayEventHandling: 400,
    },
};
