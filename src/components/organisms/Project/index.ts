import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import React from "react";

export interface projectProps{
    progress?:string;
    wrapper?:string;
    wordColor?:string;
    mode:React.FC;
    icon?:IconDefinition;
    src?:string;
}