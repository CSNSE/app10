/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type ProfileNavBarOverridesProps = {
    ProfileNavBar?: PrimitiveOverrideProps<ViewProps>;
    NoteNavBa?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    PROFILE?: PrimitiveOverrideProps<TextProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type ProfileNavBarProps = React.PropsWithChildren<Partial<ViewProps> & {
    prof?: any;
} & {
    overrides?: ProfileNavBarOverridesProps | undefined | null;
}>;
export default function ProfileNavBar(props: ProfileNavBarProps): React.ReactElement;
