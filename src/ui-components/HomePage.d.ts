/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { DividerProps, FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HomePageOverridesProps = {
    HomePage?: PrimitiveOverrideProps<FlexProps>;
    Content?: PrimitiveOverrideProps<ViewProps>;
    "Edit Profile"?: PrimitiveOverrideProps<FlexProps>;
    "Welcome to YUM dgalotto2024!"?: PrimitiveOverrideProps<TextProps>;
    Divider419387?: PrimitiveOverrideProps<DividerProps>;
    Icon?: PrimitiveOverrideProps<ViewProps>;
    "User Preferences"?: PrimitiveOverrideProps<TextProps>;
    Divider419390?: PrimitiveOverrideProps<DividerProps>;
    "User Profile"?: PrimitiveOverrideProps<TextProps>;
    "Button Icon"?: PrimitiveOverrideProps<IconProps>;
    "Interactive Map"?: PrimitiveOverrideProps<TextProps>;
    "\uD83D\uDD12Icon"?: PrimitiveOverrideProps<IconProps>;
    "Yum is your one stop shop to find the best food that you and all your friends want!"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type HomePageProps = React.PropsWithChildren<Partial<FlexProps> & {
    pref?: any;
} & {
    overrides?: HomePageOverridesProps | undefined | null;
}>;
export default function HomePage(props: HomePageProps): React.ReactElement;
