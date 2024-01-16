/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Grid,
  Button,
  Divider,
  Flex,
  Icon,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";

import { useNavigateAction, fetchByPath, getOverrideProps, validateField, processFile } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getPref } from "../graphql/queries";
import { updatePref } from "../graphql/mutations";
import { Field } from "@aws-amplify/ui-react/internal";
import { StorageManager } from "@aws-amplify/ui-react-storage";
const client = generateClient();
export default function UIEditNote(props) {
  const {
    idProp,
    pref: prefModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  console.log("thing update got it: " + {idProp});
  const initialValues = {
    type: "",
    name: "",
    priority: "",
  };
  const [type, setType] = React.useState(initialValues.type);
  const [name, setName] = React.useState(initialValues.name);
  const [priority, setPriority] = React.useState(initialValues.priority);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = prefRecord
      ? { ...initialValues, ...prefRecord }
      : initialValues;
    setType(cleanValues.type);
    setName(cleanValues.name);
    setPriority(cleanValues.priority);
    setErrors({});
  };
  const buttonOnMouseUp = useNavigateAction({ type: "url", url: "/" });
  const vectorFourOneSixSixOneFiveOneSevenOnClick = useNavigateAction({
    type: "url",
    url: "/",
  });
  const [prefRecord, setPrefRecord] = React.useState(prefModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getPref.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getPref
        : prefModelProp;
      setPrefRecord(record);
    };
    queryData();
  }, [idProp, prefModelProp]);
  React.useEffect(resetStateValues, [prefRecord]);
  const validations = {
    type: [],
    name: [],
    priority: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          type: type ?? null,
          name: name ?? null,
          priority: priority ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updatePref.replaceAll("__typename", ""),
            variables: {
              input: {
                id: prefRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "PrefUpdateForm")}
      {...rest}
    >
    <Flex
      gap="16px"
      direction="column"
      width="320px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      border="1px SOLID rgba(4,125,149,1)"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "UIEditNote")}
      {...rest}
    >
      <Flex
        gap="24px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="24px 24px 24px 24px"
        {...getOverrideProps(overrides, "Content")}
      >
        <Flex
          gap="16px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Edit Profile")}
        >
          <View
            width="21px"
            height="18px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Vector41661516")}
          >
            <Icon
              width="21px"
              height="18px"
              viewBox={{ minX: 0, minY: 0, width: 21, height: 18 }}
              paths={[
                {
                  d: "M2.01 3.03L9.52 6.25L2 5.25L2.01 3.03L2.01 3.03ZM9.51 11.75L2 14.97L2 12.75L9.51 11.75L9.51 11.75ZM0.00999999 0L0 7L15 9L0 11L0.00999999 18L21 9L0.00999999 0Z",
                  fill: "rgba(13,26,38,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="100%"
              bottom="-100%"
              left="100%"
              right="-100%"
              transformOrigin="top left"
              transform="rotate(-180deg)"
              onClick={() => {
                vectorFourOneSixSixOneFiveOneSevenOnClick();
              }}
              {...getOverrideProps(overrides, "Vector41661517")}
            ></Icon>
          </View>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Edit"
            {...getOverrideProps(overrides, "Edit")}
          ></Text>
        </Flex>
        <Divider
          width="unset"
          height="1px"
          shrink="0"
          alignSelf="stretch"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider41082294")}
        ></Divider>
        <Flex
          gap="16px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Forms")}
        >
          <TextField
            width="unset"
            height="unset"
            label="Type"
            placeholder="Dietary"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            isRequired={false}
            isReadOnly={false}
            value={type}
            onChange={(e) => {
              let { value } = e.target;
              if (onChange) {
                const modelFields = {
                  type: value,
                  name,
                  priority,
                };
                const result = onChange(modelFields);
                value = result?.type ?? value;
              }
              if (errors.type?.hasError) {
                runValidationTasks("type", value);
              }
              setType(value);
            }}
            onBlur={() => runValidationTasks("type", type)}
            errorMessage={errors.type?.errorMessage}
            hasError={errors.type?.hasError}
            {...getOverrideProps(overrides, "type")}
          ></TextField>
          <TextField
            width="unset"
            height="unset"
            label="Name"
            placeholder="Keto"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type,
              name: value,
              priority,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
          ></TextField>
          <Field

label={"Image"}
isRequired={false}
isReadOnly={false}
>
<StorageManager
  onUploadSuccess={({ key }) => {
    setPriority(
      key
    );
  }}
  processFile={processFile}
  accessLevel={"public"}
  acceptedFileTypes={[]}
  isResumable={false}
  showThumbnails={true}
  maxFileCount={1}
  {...getOverrideProps(overrides, "image")}
></StorageManager>
</Field>
        </Flex>
        <Divider
          width="unset"
          height="1px"
          shrink="0"
          alignSelf="stretch"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider41082305")}
        ></Divider>
      <Button
  children="Submit"
  type="submit"
  variation="primary"
  isDisabled={
    !(idProp || prefModelProp) ||
    Object.values(errors).some((e) => e?.hasError)
  }
  onClick={async (event) => {
    event.preventDefault(); // Prevent the default form submission

    try {
      // Perform the form submission
      await client.graphql({
        query: updatePref.replaceAll("__typename", ""),
        variables: {
          input: {
            id: prefRecord.id,
            type: type ?? null,
            name: name ?? null,
            priority: priority ?? null,
          },
        },
      });

      // If no error occurred during submission, trigger navigation
      vectorFourOneSixSixOneFiveOneSevenOnClick();
    } catch (error) {
      // Handle submission error
      console.error('Error submitting form:', error);
    }
  }}
  {...getOverrideProps(overrides, "SubmitButton")}
></Button>

      </Flex>
    </Flex>
    </Grid>
  );
}
