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
    image42451593?: PrimitiveOverrideProps<ImageProps>;
    TextField42451610?: PrimitiveOverrideProps<TextFieldProps>;
    Vector42451597?: PrimitiveOverrideProps<IconProps>;
    Input?: PrimitiveOverrideProps<FlexProps>;
    placeholder?: PrimitiveOverrideProps<TextProps>;
    "\uD83D\uDD12Icon"?: PrimitiveOverrideProps<IconProps>;
    Divider?: PrimitiveOverrideProps<DividerProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
    "Group 4"?: PrimitiveOverrideProps<ViewProps>;
    image4254104?: PrimitiveOverrideProps<ImageProps>;
    "James Joyce4254106"?: PrimitiveOverrideProps<TextProps>;
    Vector4254121?: PrimitiveOverrideProps<IconProps>;
    "Group 3"?: PrimitiveOverrideProps<ViewProps>;
    image4254110?: PrimitiveOverrideProps<ImageProps>;
    "James Joyce4254112"?: PrimitiveOverrideProps<TextProps>;
    Vector4254123?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 1"?: PrimitiveOverrideProps<ViewProps>;
    "Add Friends"?: PrimitiveOverrideProps<TextProps>;
    TextField42661589?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EditProfileProps = React.PropsWithChildren<Partial<FlexProps> & {
    pref?: any;
    input42451607?: React.ReactNode;
} & {
    overrides?: EditProfileOverridesProps | undefined | null;
}>;
export default function EditProfile(props: EditProfileProps): React.ReactElement;
