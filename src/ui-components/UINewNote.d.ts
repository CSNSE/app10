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
export declare type UINewNoteOverridesProps = {
    UINewNote?: PrimitiveOverrideProps<FlexProps>;
    Content?: PrimitiveOverrideProps<FlexProps>;
    "Edit Profile"?: PrimitiveOverrideProps<FlexProps>;
    Vector41661520?: PrimitiveOverrideProps<ViewProps>;
    Vector41661521?: PrimitiveOverrideProps<IconProps>;
    Create?: PrimitiveOverrideProps<TextProps>;
    Divider40931521?: PrimitiveOverrideProps<DividerProps>;
    Forms?: PrimitiveOverrideProps<FlexProps>;
    TextField40931526?: PrimitiveOverrideProps<TextFieldProps>;
    TextField40931527?: PrimitiveOverrideProps<TextFieldProps>;
    TextField41082472?: PrimitiveOverrideProps<TextFieldProps>;
    Divider40931529?: PrimitiveOverrideProps<DividerProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type UINewNoteProps = React.PropsWithChildren<Partial<FlexProps> & {
    note?: any;
} & {
    overrides?: UINewNoteOverridesProps | undefined | null;
}>;
export default function UINewNote(props: UINewNoteProps): React.ReactElement;
