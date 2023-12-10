/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PrefUpdateFormInputValues = {
    type?: string;
    name?: string;
    priority?: string;
};
export declare type PrefUpdateFormValidationValues = {
    type?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    priority?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PrefUpdateFormOverridesProps = {
    PrefUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    priority?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PrefUpdateFormProps = React.PropsWithChildren<{
    overrides?: PrefUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    pref?: any;
    onSubmit?: (fields: PrefUpdateFormInputValues) => PrefUpdateFormInputValues;
    onSuccess?: (fields: PrefUpdateFormInputValues) => void;
    onError?: (fields: PrefUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PrefUpdateFormInputValues) => PrefUpdateFormInputValues;
    onValidate?: PrefUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PrefUpdateForm(props: PrefUpdateFormProps): React.ReactElement;
