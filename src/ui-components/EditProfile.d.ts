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
export declare type EditProfileOverridesProps = {
    EditProfile?: PrimitiveOverrideProps<FlexProps>;
    Content?: PrimitiveOverrideProps<ViewProps>;
    TextField43031671?: PrimitiveOverrideProps<TextFieldProps>;
    TextField43031672?: PrimitiveOverrideProps<TextFieldProps>;
    Vector43031673?: PrimitiveOverrideProps<IconProps>;
    Input?: PrimitiveOverrideProps<FlexProps>;
    placeholder?: PrimitiveOverrideProps<TextProps>;
    "\uD83D\uDD12Icon"?: PrimitiveOverrideProps<IconProps>;
    Divider?: PrimitiveOverrideProps<DividerProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
    "Group 4"?: PrimitiveOverrideProps<ViewProps>;
    image43031681?: PrimitiveOverrideProps<ImageProps>;
    "James Joyce43031682"?: PrimitiveOverrideProps<TextProps>;
    Vector43031683?: PrimitiveOverrideProps<IconProps>;
    "Group 3"?: PrimitiveOverrideProps<ViewProps>;
    image43031686?: PrimitiveOverrideProps<ImageProps>;
    "James Joyce43031687"?: PrimitiveOverrideProps<TextProps>;
    Vector43031688?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 1"?: PrimitiveOverrideProps<ViewProps>;
    "Add Friends"?: PrimitiveOverrideProps<TextProps>;
    TextField43031691?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EditProfileProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: EditProfileOverridesProps | undefined | null;
}>;
export default function EditProfile(props: EditProfileProps): React.ReactElement;
