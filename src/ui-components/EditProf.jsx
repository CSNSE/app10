/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { useEffect, useState } from "react";
import { generateClient } from "aws-amplify/api";
import { updateProfile } from "../graphql/mutations";
import { getOverrideProps, useNavigateAction } from "./utils";
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
export default function EditProf(props) {
  const { prof, overrides, ...rest } = props;
  const [
    textFieldFourThreeFourSevenThreeZeroSevenValue,
    setTextFieldFourThreeFourSevenThreeZeroSevenValue,
  ] = useState("");
  const [
    textFieldFourThreeFourSevenThreeZeroEightValue,
    setTextFieldFourThreeFourSevenThreeZeroEightValue,
  ] = useState("");
  const [
    textFieldFourThreeFourSevenThreeZeroNineValue,
    setTextFieldFourThreeFourSevenThreeZeroNineValue,
  ] = useState("");
  const buttonOnMouseDown = async () => {
    await client.graphql({
      query: updateProfile.replaceAll("__typename", ""),
      variables: {
        input: {
          username: textFieldFourThreeFourSevenThreeZeroSevenValue,
          email: textFieldFourThreeFourSevenThreeZeroEightValue,
          profPic: textFieldFourThreeFourSevenThreeZeroNineValue,
          id: prof?.id,
        },
      },
    });
  };
  const buttonOnMouseOut = useNavigateAction({ type: "url", url: "/prof" });
  useEffect(() => {
    if (
      textFieldFourThreeFourSevenThreeZeroSevenValue === "" &&
      prof !== undefined &&
      prof?.username !== undefined
    )
      setTextFieldFourThreeFourSevenThreeZeroSevenValue(prof?.username);
  }, [prof]);
  useEffect(() => {
    if (
      textFieldFourThreeFourSevenThreeZeroEightValue === "" &&
      prof !== undefined &&
      prof?.email !== undefined
    )
      setTextFieldFourThreeFourSevenThreeZeroEightValue(prof?.email);
  }, [prof]);
  useEffect(() => {
    if (
      textFieldFourThreeFourSevenThreeZeroNineValue === "" &&
      prof !== undefined &&
      prof?.profPic !== undefined
    )
      setTextFieldFourThreeFourSevenThreeZeroNineValue(prof?.profPic);
  }, [prof]);
  return (
    <Flex
      gap="16px"
      direction="column"
      width="320px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      border="1px SOLID rgba(70,45,180,1)"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "EditProf")}
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
            {...getOverrideProps(overrides, "Vector4347302")}
          >
            <Icon
              width="21px"
              height="18px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 21,
                height: 18.000000000000004,
              }}
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
              {...getOverrideProps(overrides, "Vector4347303")}
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
            children="Edit Profile"
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
          {...getOverrideProps(overrides, "Divider4347305")}
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
            label="Username"
            placeholder="Davey"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldFourThreeFourSevenThreeZeroSevenValue}
            onChange={(event) => {
              setTextFieldFourThreeFourSevenThreeZeroSevenValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField4347307")}
          ></TextField>
          <TextField
            width="unset"
            height="unset"
            label="Email"
            placeholder="dgalotto"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldFourThreeFourSevenThreeZeroEightValue}
            onChange={(event) => {
              setTextFieldFourThreeFourSevenThreeZeroEightValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField4347308")}
          ></TextField>
          <TextField
            width="unset"
            height="unset"
            label="Profile Picture"
            placeholder="High"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldFourThreeFourSevenThreeZeroNineValue}
            onChange={(event) => {
              setTextFieldFourThreeFourSevenThreeZeroNineValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField4347309")}
          ></TextField>
        </Flex>
        <Divider
          width="unset"
          height="1px"
          shrink="0"
          alignSelf="stretch"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider4347310")}
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
          onMouseOut={() => {
            buttonOnMouseOut();
          }}
          {...getOverrideProps(overrides, "Button")}
        ></Button>
      </Flex>
    </Flex>
  );
}
