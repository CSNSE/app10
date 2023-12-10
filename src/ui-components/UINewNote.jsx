/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { useState } from "react";
import { generateClient } from "aws-amplify/api";
import { createPref } from "../graphql/mutations";
import { getOverrideProps, useNavigateAction } from "./utils";
import { Button, Divider, Flex, Text, TextField } from "@aws-amplify/ui-react";
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
    textFieldFourOneZeroEightTwoFourSevenTwoValue,
    setTextFieldFourOneZeroEightTwoFourSevenTwoValue,
  ] = useState("");
  const buttonOnClick = async () => {
    await client.graphql({
      query: createPref.replaceAll("__typename", ""),
      variables: {
        input: {
          type: textFieldFourZeroNineThreeOneFiveTwoSixValue,
          name: textFieldFourZeroNineThreeOneFiveTwoSevenValue,
          priority: textFieldFourOneZeroEightTwoFourSevenTwoValue,
        },
      },
    });
  };
  const buttonOnMouseOut = useNavigateAction({ type: "url", url: "/" });
  return (
    <Flex
      gap="16px"
      direction="column"
      width="320px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
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
          <TextField
            width="unset"
            height="unset"
            label="Priority"
            placeholder="Medium"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldFourOneZeroEightTwoFourSevenTwoValue}
            onChange={(event) => {
              setTextFieldFourOneZeroEightTwoFourSevenTwoValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField41082472")}
          ></TextField>
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
          onClick={() => {
            buttonOnClick();
          }}
          onMouseOut={() => {
            buttonOnMouseOut();
          }}
          {...getOverrideProps(overrides, "Button")}
        ></Button>
      </Flex>
    </Flex>
  );
}
