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
export declare type EditProfOverridesProps = {
    EditProf?: PrimitiveOverrideProps<FlexProps>;
    Content?: PrimitiveOverrideProps<FlexProps>;
    "Edit Profile"?: PrimitiveOverrideProps<FlexProps>;
    Vector4347302?: PrimitiveOverrideProps<ViewProps>;
    Vector4347303?: PrimitiveOverrideProps<IconProps>;
    Edit?: PrimitiveOverrideProps<TextProps>;
    Divider4347305?: PrimitiveOverrideProps<DividerProps>;
    Forms?: PrimitiveOverrideProps<FlexProps>;
    TextField4347307?: PrimitiveOverrideProps<TextFieldProps>;
    TextField4347308?: PrimitiveOverrideProps<TextFieldProps>;
    TextField4347309?: PrimitiveOverrideProps<TextFieldProps>;
    Divider4347310?: PrimitiveOverrideProps<DividerProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type EditProfProps = React.PropsWithChildren<Partial<FlexProps> & {
    prof?: any;
} & {
    overrides?: EditProfOverridesProps | undefined | null;
}>;
export default function EditProf(props: EditProfProps): React.ReactElement;
