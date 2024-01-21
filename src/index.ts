import { ActionTypes } from "./ActionTypes";
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

export const calculatePrice = (selectedServices: ServiceType[], selectedYear: ServiceYear) => ({ basePrice: 0, finalPrice: 0 });
