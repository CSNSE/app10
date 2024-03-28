/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, DividerProps, FlexProps, IconProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
    Content?: PrimitiveOverrideProps<FlexProps>;
    "Edit Profile"?: PrimitiveOverrideProps<FlexProps>;
    Vector4346264?: PrimitiveOverrideProps<ViewProps>;
    Vector4346265?: PrimitiveOverrideProps<IconProps>;
    Create?: PrimitiveOverrideProps<TextProps>;
    Divider4346267?: PrimitiveOverrideProps<DividerProps>;
    Forms?: PrimitiveOverrideProps<FlexProps>;
    TextField4346269?: PrimitiveOverrideProps<TextFieldProps>;
    TextField4346271?: PrimitiveOverrideProps<TextFieldProps>;
    Divider4346272?: PrimitiveOverrideProps<DividerProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type CreateProfProps = React.PropsWithChildren<Partial<FlexProps> & {
    prof?: any;
} & {
    overrides?: CreateProfOverridesProps | undefined | null;
}>;
export default function CreateProf(props: CreateProfProps): React.ReactElement;
