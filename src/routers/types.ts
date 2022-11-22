import { ComponentType } from "react";

export interface LocationStates {
  "/"?: {};
  "/login"?: {};
  "/dashboard"?: {};
}

export type PathName = keyof LocationStates;

export interface Page {
  path: PathName;
  exact?: boolean;
  component: ComponentType<Object>;
}
