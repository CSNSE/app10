/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type HomeNavBarOverridesProps = {
    HomeNavBar?: PrimitiveOverrideProps<ViewProps>;
    NoteNavBa?: PrimitiveOverrideProps<FlexProps>;
    "Star 2"?: PrimitiveOverrideProps<IconProps>;
    YUM?: PrimitiveOverrideProps<TextProps>;
    "Star 3"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type HomeNavBarProps = React.PropsWithChildren<Partial<ViewProps> & {
    pref?: any;
} & {
    overrides?: HomeNavBarOverridesProps | undefined | null;
}>;
export default function HomeNavBar(props: HomeNavBarProps): React.ReactElement;
