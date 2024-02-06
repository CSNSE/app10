/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, DividerProps, FlexProps, IconProps, ImageProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type CreateProfOverridesProps = {
    CreateProf?: PrimitiveOverrideProps<FlexProps>;
    Content?: PrimitiveOverrideProps<ViewProps>;
    TextField4289168?: PrimitiveOverrideProps<TextFieldProps>;
    TextField4289169?: PrimitiveOverrideProps<TextFieldProps>;
    Vector4289170?: PrimitiveOverrideProps<IconProps>;
    Input?: PrimitiveOverrideProps<FlexProps>;
    placeholder?: PrimitiveOverrideProps<TextProps>;
    "\uD83D\uDD12Icon"?: PrimitiveOverrideProps<IconProps>;
    Divider?: PrimitiveOverrideProps<DividerProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
    "Group 4"?: PrimitiveOverrideProps<ViewProps>;
    image4289178?: PrimitiveOverrideProps<ImageProps>;
    "James Joyce4289179"?: PrimitiveOverrideProps<TextProps>;
    Vector4289180?: PrimitiveOverrideProps<IconProps>;
    "Group 3"?: PrimitiveOverrideProps<ViewProps>;
    image4289183?: PrimitiveOverrideProps<ImageProps>;
    "James Joyce4289184"?: PrimitiveOverrideProps<TextProps>;
    Vector4289185?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 1"?: PrimitiveOverrideProps<ViewProps>;
    "Add Friends"?: PrimitiveOverrideProps<TextProps>;
    TextField4289188?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CreateProfProps = React.PropsWithChildren<Partial<FlexProps> & {
    prof?: any;
} & {
    overrides?: CreateProfOverridesProps | undefined | null;
}>;
export default function CreateProf(props: CreateProfProps): React.ReactElement;
