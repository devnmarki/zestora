import { TransitionTypes } from "./enums";

export type Transition = {
    type?: TransitionTypes;
    duration?: number;
}