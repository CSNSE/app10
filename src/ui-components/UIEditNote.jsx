/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { useEffect, useState } from "react";
import { generateClient } from "aws-amplify/api";
import { updatePref } from "../graphql/mutations";
import { getOverrideProps } from "./utils";
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
export default function UIEditNote(props) {
  const { pref, overrides, ...rest } = props;
  const [
    textFieldFourOneZeroEightTwoTwoNineSixValue,
    setTextFieldFourOneZeroEightTwoTwoNineSixValue,
  ] = useState("");
  const [
    textFieldFourOneZeroEightTwoTwoNineSevenValue,
    setTextFieldFourOneZeroEightTwoTwoNineSevenValue,
  ] = useState("");
  const [
    textFieldFourOneZeroEightTwoFourFiveZeroValue,
    setTextFieldFourOneZeroEightTwoFourFiveZeroValue,
  ] = useState("");
  const buttonOnClick = async () => {
    await client.graphql({
      query: updatePref.replaceAll("__typename", ""),
      variables: {
        input: {
          type: textFieldFourOneZeroEightTwoTwoNineSixValue,
          name: textFieldFourOneZeroEightTwoTwoNineSevenValue,
          priority: textFieldFourOneZeroEightTwoFourFiveZeroValue,
          id: pref?.id,
        },
      },
    });
  };
  useEffect(() => {
    if (
      textFieldFourOneZeroEightTwoTwoNineSixValue === "" &&
      pref !== undefined &&
      pref?.type !== undefined
    )
      setTextFieldFourOneZeroEightTwoTwoNineSixValue(pref?.type);
  }, [pref]);
  useEffect(() => {
    if (
      textFieldFourOneZeroEightTwoTwoNineSevenValue === "" &&
      pref !== undefined &&
      pref?.name !== undefined
    )
      setTextFieldFourOneZeroEightTwoTwoNineSevenValue(pref?.name);
  }, [pref]);
  useEffect(() => {
    if (
      textFieldFourOneZeroEightTwoFourFiveZeroValue === "" &&
      pref !== undefined &&
      pref?.priority !== undefined
    )
      setTextFieldFourOneZeroEightTwoFourFiveZeroValue(pref?.priority);
  }, [pref]);
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
            width="24px"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Icon")}
          >
            <Icon
              width="14px"
              height="14px"
              viewBox={{ minX: 0, minY: 0, width: 14, height: 14 }}
              paths={[
                {
                  d: "M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z",
                  fill: "rgba(13,26,38,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="20.83%"
              bottom="20.83%"
              left="20.83%"
              right="20.83%"
              {...getOverrideProps(overrides, "Vector")}
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
            children={pref?.id}
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
            value={textFieldFourOneZeroEightTwoTwoNineSixValue}
            onChange={(event) => {
              setTextFieldFourOneZeroEightTwoTwoNineSixValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField41082296")}
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
            value={textFieldFourOneZeroEightTwoTwoNineSevenValue}
            onChange={(event) => {
              setTextFieldFourOneZeroEightTwoTwoNineSevenValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField41082297")}
          ></TextField>
          <TextField
            width="unset"
            height="unset"
            label="Priority"
            placeholder="High"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldFourOneZeroEightTwoFourFiveZeroValue}
            onChange={(event) => {
              setTextFieldFourOneZeroEightTwoFourFiveZeroValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField41082450")}
          ></TextField>
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
          {...getOverrideProps(overrides, "Button")}
        ></Button>
      </Flex>
    </Flex>
  );
}
