/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { useState } from "react";
import { getOverrideProps, useNavigateAction, processFile } from "./utils";
import { generateClient } from "aws-amplify/api";
import { Field } from "@aws-amplify/ui-react/internal";
import { StorageManager } from "@aws-amplify/ui-react-storage";
import { createPref } from "../graphql/mutations";
import {
  Button,
  Divider,
  Flex,
  Icon,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
const client = generateClient();
export default function UINewNote(props) {
  const { note, overrides, ...rest } = props;
  const [
    textFieldFourZeroNineThreeOneFiveTwoSixValue,
    setTextFieldFourZeroNineThreeOneFiveTwoSixValue,
  ] = useState("");
  const [
    textFieldFourZeroNineThreeOneFiveTwoSevenValue,
    setTextFieldFourZeroNineThreeOneFiveTwoSevenValue,
  ] = useState("");
  const [
    imageName,
    setImageName,
  ] = useState("");
  const vectorFourOneSixSixOneFiveTwoOneOnClick = useNavigateAction({
    type: "url",
    url: "/pref",
  });
  const buttonOnMouseDown = async () => {
    await client.graphql({
      query: createPref.replaceAll("__typename", ""),
      variables: {
        input: {
          type: textFieldFourZeroNineThreeOneFiveTwoSixValue,
          name: textFieldFourZeroNineThreeOneFiveTwoSevenValue,
          priority: imageName,
        },
      },
    });
  };
  const buttonOnMouseUp = useNavigateAction({ type: "url", url: "/pref" });
  return (
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
      {...getOverrideProps(overrides, "UINewNote")}
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
            {...getOverrideProps(overrides, "Vector41661520")}
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
                vectorFourOneSixSixOneFiveTwoOneOnClick();
              }}
              {...getOverrideProps(overrides, "Vector41661521")}
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
            children="Create"
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
          {...getOverrideProps(overrides, "Divider40931521")}
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
            value={textFieldFourZeroNineThreeOneFiveTwoSixValue}
            onChange={(event) => {
              setTextFieldFourZeroNineThreeOneFiveTwoSixValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField40931526")}
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
            value={textFieldFourZeroNineThreeOneFiveTwoSevenValue}
            onChange={(event) => {
              setTextFieldFourZeroNineThreeOneFiveTwoSevenValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField40931527")}
          ></TextField>
          <Field

label={"Image"}
isRequired={false}
isReadOnly={false}
>
<StorageManager
  onUploadSuccess={({ key }) => {
    setImageName(
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
          {...getOverrideProps(overrides, "Divider40931529")}
        ></Divider>
        <Button
          width="unset"
          height="unset"
          shrink="0"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Save"
          onMouseDown={() => {
            buttonOnMouseDown();
          }}
          onMouseUp={() => {
            buttonOnMouseUp();
          }}
          {...getOverrideProps(overrides, "Button")}
        ></Button>
      </Flex>
    </Flex>
  );
}
