import { ActionTypes } from "./ActionTypes";
import { getDiscount } from "./getDiscount";
import { handleDeselect } from "./handleDeselect";
import { handleSelect } from "./handleSelect";

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
        default:
            return previouslySelectedServices;
    }
};

export const calculatePrice = (selectedServices: ServiceType[], selectedYear: ServiceYear) => {
    let basePrice = 0;
    let finalPrice = 0;
    let weddingSessionDiscount = 0;
    let blurayPackageDiscount = 0;
    let twoDayEventDiscount = 0;

    const discount = getDiscount(weddingSessionDiscount, blurayPackageDiscount, twoDayEventDiscount);

    finalPrice = basePrice - discount;

    return { basePrice, finalPrice };
}
