/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { DividerProps, FlexProps, IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type ProfileOverridesProps = {
    Profile?: PrimitiveOverrideProps<FlexProps>;
    Content?: PrimitiveOverrideProps<ViewProps>;
    "Edit Profile"?: PrimitiveOverrideProps<ViewProps>;
    "Username: David Galotto"?: PrimitiveOverrideProps<TextProps>;
    "Phone Number: 703-395-0128"?: PrimitiveOverrideProps<TextProps>;
    Vector42451564?: PrimitiveOverrideProps<IconProps>;
    Input?: PrimitiveOverrideProps<ViewProps>;
    placeholder?: PrimitiveOverrideProps<TextProps>;
    InputGroup?: PrimitiveOverrideProps<FlexProps>;
    "Group 2"?: PrimitiveOverrideProps<FlexProps>;
    image425486?: PrimitiveOverrideProps<ImageProps>;
    "James Joyce425488"?: PrimitiveOverrideProps<TextProps>;
    Divider?: PrimitiveOverrideProps<DividerProps>;
    "Group 1"?: PrimitiveOverrideProps<ViewProps>;
    image425475?: PrimitiveOverrideProps<ImageProps>;
    "James Joyce425476"?: PrimitiveOverrideProps<TextProps>;
    "Email: dgalotto2024@communityschoolanples.org"?: PrimitiveOverrideProps<TextProps>;
    "SHOW MORE"?: PrimitiveOverrideProps<TextProps>;
    MyIcon?: PrimitiveOverrideProps<ViewProps>;
    Vector4312107?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type ProfileProps = React.PropsWithChildren<Partial<FlexProps> & {
    prof?: any;
} & {
    overrides?: ProfileOverridesProps | undefined | null;
}>;
export default function Profile(props: ProfileProps): React.ReactElement;
