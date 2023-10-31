import {ReactNode} from "react";

export type children = ReactNode;

export type JustifyContent =
    "center"
    | "start"
    | "end"
    | "flex-start"
    | "flex-end"
    | "left"
    | "right"
    | "normal"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "stretch"
    | "inherit"
    | "initial"
    | "revert"
    | "unset";

export type AlignItems =
    "normal"
    | "stretch"
    | "center"
    | "start"
    | "end"
    | "flex-start"
    | "flex-end"
    | "self-start"
    | "self-end"
    | "baseline"
    | "inherit"
    | "initial"
    | "revert"
    | "unset";

export type FlexDirection =
    "row"
    | "row-reverse"
    | "column"
    | "column-reverse"
    | "inherit"
    | "initial"
    | "revert"
    | "unset";

export type Gap = number