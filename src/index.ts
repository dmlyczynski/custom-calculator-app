import { ActionTypes } from "./ActionTypes";
import { getDiscount } from "./getDiscount";
import { handleDeselect } from "./handleDeselect";
import { handleSelect } from "./handleSelect";
import { servicePrices } from "./servicePrices";

export type ServiceYear = 2020 | 2021 | 2022;
export type ServiceType = "Photography" | "VideoRecording" | "BlurayPackage" | "TwoDayEvent" | "WeddingSession";
export type ActionType = "Select" | "Deselect";

export const updateSelectedServices = (
    previouslySelectedServices: ServiceType[],
    action: { type: ActionType; service: ServiceType }
): ServiceType[] => {
    const { type, service } = action;

    switch (type) {
        case ActionTypes.Select:
            return handleSelect(previouslySelectedServices, service);
        case ActionTypes.Deselect:
            return handleDeselect(previouslySelectedServices, service);
        default: {
            throw Error('Unknown action: ' + type);
        };
    }
};

export const calculatePrice = (selectedServices: ServiceType[], selectedYear: ServiceYear) => {
    let basePrice = 0;
    let finalPrice = 0;
    let weddingSessionDiscount = 0;
    let blurayPackageDiscount = 0;
    let twoDayEventDiscount = 0;

    const hasPhotography = selectedServices.includes("Photography");
    const hasVideoRecording = selectedServices.includes("VideoRecording");
    if (hasPhotography && hasVideoRecording) {
        basePrice = servicePrices[selectedYear].photographyAndVideo;
    } else {
        basePrice = hasPhotography
            ? servicePrices[selectedYear].photography
            : hasVideoRecording
                ? servicePrices[selectedYear].videoRecording
                : 0;
    }

    const hasWeddingSession = selectedServices.includes("WeddingSession");
    if (hasWeddingSession) {
        basePrice += servicePrices[selectedYear].weddingSession;
        if (selectedYear === 2020 && hasVideoRecording) {
            weddingSessionDiscount = 300;
        } else if (hasPhotography || hasVideoRecording) {
            weddingSessionDiscount = 300;
        }

        if (selectedYear === 2022 && hasPhotography) {
            basePrice -= servicePrices[selectedYear].weddingSession;
            finalPrice = basePrice;

            return { basePrice, finalPrice };
        }
    }

    const hasBlurayPackage = selectedServices.includes("BlurayPackage");
    if (hasBlurayPackage && hasVideoRecording) {
        blurayPackageDiscount = servicePrices[selectedYear].extraBluRay;
    }

    const hasTwoDayEvent = selectedServices.includes("TwoDayEvent");
    if (hasTwoDayEvent && (hasPhotography || hasVideoRecording)) {
        twoDayEventDiscount = servicePrices[selectedYear].twoDayEventHandling;
    }

    const discount = getDiscount(weddingSessionDiscount, blurayPackageDiscount, twoDayEventDiscount);

    finalPrice = basePrice - discount;

    return { basePrice, finalPrice };
}
