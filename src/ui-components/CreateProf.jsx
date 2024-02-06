/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { useState } from "react";
import { generateClient } from "aws-amplify/api";
import { createProfile } from "../graphql/mutations";
import { getOverrideProps, useNavigateAction } from "./utils";
import {
  Button,
  Divider,
  Flex,
  Icon,
  Image,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
const client = generateClient();
export default function CreateProf(props) {
  const { prof, overrides, ...rest } = props;
  const [
    textFieldFourTwoEightNineOneSixNineValue,
    setTextFieldFourTwoEightNineOneSixNineValue,
  ] = useState("");
  const [
    textFieldFourTwoEightNineOneSixEightValue,
    setTextFieldFourTwoEightNineOneSixEightValue,
  ] = useState("");
  const [
    textFieldFourTwoEightNineOneEightEightValue,
    setTextFieldFourTwoEightNineOneEightEightValue,
  ] = useState("");
  const buttonOnMouseDown = async () => {
    await client.graphql({
      query: createProfile.replaceAll("__typename", ""),
      variables: {
        input: {
          username: textFieldFourTwoEightNineOneSixNineValue,
          profPic: textFieldFourTwoEightNineOneSixEightValue,
          phone: textFieldFourTwoEightNineOneEightEightValue,
        },
      },
    });
  };
  const buttonOnMouseOut = useNavigateAction({
    type: "url",
    url: `${"/prof/"}${prof?.id}`,
  });
  return (
    <Flex
      gap="10px"
      direction="row"
      width="320px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      border="1px SOLID rgba(70,45,180,1)"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "CreateProf")}
      {...rest}
    >
      <View
        width="unset"
        height="512px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Content")}
      >
        <TextField
          width="67px"
          height="unset"
          label="Priority"
          placeholder="High"
          position="absolute"
          top="4px"
          left="0px"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          value={textFieldFourTwoEightNineOneSixEightValue}
          onChange={(event) => {
            setTextFieldFourTwoEightNineOneSixEightValue(event.target.value);
          }}
          {...getOverrideProps(overrides, "TextField4289168")}
        ></TextField>
        <TextField
          width="272px"
          height="unset"
          label="Phone Number"
          placeholder="000-000-0000"
          position="absolute"
          top="115px"
          left="12px"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          value={textFieldFourTwoEightNineOneSixNineValue}
          onChange={(event) => {
            setTextFieldFourTwoEightNineOneSixNineValue(event.target.value);
          }}
          {...getOverrideProps(overrides, "TextField4289169")}
        ></TextField>
        <Icon
          width="41px"
          height="29px"
          viewBox={{ minX: 0, minY: 0, width: 41, height: 29 }}
          paths={[
            {
              d: "M14.35 18.125C9.553 18.125 0 20.5486 0 25.375L0 29L28.7 29L28.7 25.375C28.7 20.5486 19.147 18.125 14.35 18.125ZM4.797 24.8571C6.519 23.6557 10.6805 22.2679 14.35 22.2679C18.0195 22.2679 22.181 23.6557 23.903 24.8571L4.797 24.8571ZM14.35 14.5C18.3065 14.5 21.525 11.2479 21.525 7.25C21.525 3.25214 18.3065 0 14.35 0C10.3935 0 7.175 3.25214 7.175 7.25C7.175 11.2479 10.3935 14.5 14.35 14.5ZM14.35 4.14286C16.0515 4.14286 17.425 5.53071 17.425 7.25C17.425 8.96929 16.0515 10.3571 14.35 10.3571C12.6485 10.3571 11.275 8.96929 11.275 7.25C11.275 5.53071 12.6485 4.14286 14.35 4.14286ZM28.782 18.2493C31.16 19.9893 32.8 22.3093 32.8 25.375L32.8 29L41 29L41 25.375C41 21.1907 33.825 18.8086 28.782 18.2493ZM26.65 14.5C30.6065 14.5 33.825 11.2479 33.825 7.25C33.825 3.25214 30.6065 0 26.65 0C25.543 0 24.518 0.269286 23.575 0.725C24.8665 2.56857 25.625 4.82643 25.625 7.25C25.625 9.67357 24.8665 11.9314 23.575 13.775C24.518 14.2307 25.543 14.5 26.65 14.5Z",
              fill: "rgba(13,26,38,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="263px"
          left="12px"
          {...getOverrideProps(overrides, "Vector4289170")}
        ></Icon>
        <Flex
          gap="10px"
          direction="row"
          width="219px"
          height="unset"
          justifyContent="center"
          alignItems="center"
          position="absolute"
          top="253px"
          left="66px"
          border="1px SOLID rgba(174,179,183,1)"
          borderRadius="5px"
          padding="8px 16px 8px 16px"
          {...getOverrideProps(overrides, "Input")}
        >
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="30px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Friends"
            {...getOverrideProps(overrides, "placeholder")}
          ></Text>
          <Icon
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
            type="chevron_down"
            fontSize="24px"
            {...getOverrideProps(overrides, "\uD83D\uDD12Icon")}
          ></Icon>
        </Flex>
        <Divider
          width="272px"
          height="1px"
          position="absolute"
          top="446px"
          left="28px"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider")}
        ></Divider>
        <Button
          width="unset"
          height="unset"
          position="absolute"
          top="465px"
          left="12px"
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
        <View
          padding="0px 0px 0px 0px"
          width="150.71px"
          height="32px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="315px"
          left="77px"
          {...getOverrideProps(overrides, "Group 4")}
        >
          <Image
            width="32px"
            height="32px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="0px"
            borderRadius="160px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            {...getOverrideProps(overrides, "image4289178")}
          ></Image>
          <Text
            fontFamily="Inter"
            fontSize="14px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="21px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="5px"
            left="40px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="James Joyce"
            {...getOverrideProps(overrides, "James Joyce4289179")}
          ></Text>
          <Icon
            width="14.04px"
            height="18px"
            viewBox={{ minX: 0, minY: 0, width: 14.0438871383667, height: 18 }}
            paths={[
              {
                d: "M11.0345 6L11.0345 16L3.0094 16L3.0094 6L11.0345 6ZM9.52978 0L4.51411 0L3.51097 1L0 1L0 3L14.0439 3L14.0439 1L10.5329 1L9.52978 0ZM13.0408 4L1.00313 4L1.00313 16C1.00313 17.1 1.90596 18 3.0094 18L11.0345 18C12.1379 18 13.0408 17.1 13.0408 16L13.0408 4Z",
                fill: "rgba(13,26,38,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="21.88%"
            bottom="21.88%"
            left="90.68%"
            right="0%"
            {...getOverrideProps(overrides, "Vector4289180")}
          ></Icon>
        </View>
        <View
          padding="0px 0px 0px 0px"
          width="150.71px"
          height="32px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="355px"
          left="77px"
          {...getOverrideProps(overrides, "Group 3")}
        >
          <Image
            width="32px"
            height="32px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="0px"
            borderRadius="160px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            {...getOverrideProps(overrides, "image4289183")}
          ></Image>
          <Text
            fontFamily="Inter"
            fontSize="14px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="21px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="5px"
            left="40px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="James Joyce"
            {...getOverrideProps(overrides, "James Joyce4289184")}
          ></Text>
          <Icon
            width="14.04px"
            height="18px"
            viewBox={{ minX: 0, minY: 0, width: 14.0438871383667, height: 18 }}
            paths={[
              {
                d: "M11.0345 6L11.0345 16L3.0094 16L3.0094 6L11.0345 6ZM9.52978 0L4.51411 0L3.51097 1L0 1L0 3L14.0439 3L14.0439 1L10.5329 1L9.52978 0ZM13.0408 4L1.00313 4L1.00313 16C1.00313 17.1 1.90596 18 3.0094 18L11.0345 18C12.1379 18 13.0408 17.1 13.0408 16L13.0408 4Z",
                fill: "rgba(13,26,38,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="21.88%"
            bottom="21.88%"
            left="90.68%"
            right="0%"
            {...getOverrideProps(overrides, "Vector4289185")}
          ></Icon>
        </View>
        <View
          width="157px"
          height="32px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="401px"
          left="77px"
          borderRadius="18px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(217,217,217,1)"
          {...getOverrideProps(overrides, "Rectangle 1")}
        ></View>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="405px"
          left="112px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Add Friends"
          {...getOverrideProps(overrides, "Add Friends")}
        ></Text>
        <TextField
          width="167px"
          height="unset"
          label="Phone Number"
          placeholder="Username"
          position="absolute"
          top="32px"
          left="83px"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          value={textFieldFourTwoEightNineOneEightEightValue}
          onChange={(event) => {
            setTextFieldFourTwoEightNineOneEightEightValue(event.target.value);
          }}
          {...getOverrideProps(overrides, "TextField4289188")}
        ></TextField>
      </View>
    </Flex>
  );
}
