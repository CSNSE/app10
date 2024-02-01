/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useAuth } from "./utils";
import { Divider, Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function HomePage(props) {
  const { pref, overrides, ...rest } = props;
  const authAttributes = useAuth().user?.attributes ?? {};
  const email = authAttributes["email"];
const username = email ? email.substring(0,email.indexOf("@")) : "Guest";
  return (
    <Flex
      gap="16px"
      direction="column"
      width="320px"
      height="421px"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      border="1px SOLID rgba(4,125,149,1)"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "HomePage")}
      {...rest}
    >
      <View
        width="unset"
        height="357px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Content")}
      >
        <Flex
          gap="16px"
          direction="row"
          width="272px"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          position="absolute"
          top="24px"
          left="24px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Edit Profile")}
        >
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="800"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="278px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={`${"Welcome to YUM "}${username}`}
            {...getOverrideProps(overrides, "Welcome to YUM dgalotto2024!")}
          ></Text>
        </Flex>
        <Divider
          width="272px"
          height="24px"
          position="absolute"
          top="148px"
          left="24px"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider419387")}
        ></Divider>
        <View
          width="24px"
          height="24px"
          {...getOverrideProps(overrides, "Icon")}
        ></View>
       <a
  href="/pref"
  style={{
    fontFamily: "Inter",
    fontSize: "16px",
    fontWeight: 700,
    color: "rgba(0,0,0,1)",
    lineHeight: "24px",
    textAlign: "left",
    display: "block",
    position: "absolute",
    top: "188px",
    left: "24px",
    padding: "0px 0px 0px 0px",
    textDecoration: "none", // Removes underline (optional)
  }}
>
  User Preferences
</a>
<Divider
  width="272px"
  height="1px"
  position="absolute"
  top="340px"
  left="24px"
  size="small"
  orientation="horizontal"
  {...getOverrideProps(overrides, "Divider419390")}
></Divider>
<a href="/prof">
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
    top="241px"
    left="24px"
    padding="0px 0px 0px 0px"
    whiteSpace="pre-wrap"
    children="User Profile"
    {...getOverrideProps(overrides, "User Profile")}
  ></Text>
</a>

        <Icon
          width="24px"
          height="27.03px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="67.23%"
          bottom="25.2%"
          left="54.37%"
          right="38.13%"
          padding="0px 0px 0px 0px"
          type="visibility"
          fontSize="24px"
          {...getOverrideProps(overrides, "Button Icon")}
        ></Icon>
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
          top="295px"
          left="24px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Interactive Map"
          {...getOverrideProps(overrides, "Interactive Map")}
        ></Text>
        <Icon
          width="22.08px"
          height="24px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="295px"
          left="176px"
          padding="0px 0px 0px 0px"
          type="search"
          fontSize="22.08px"
          {...getOverrideProps(overrides, "\uD83D\uDD12Icon")}
        ></Icon>
        <Text
          fontFamily="Inter"
          fontSize="12px"
          fontWeight="800"
          color="rgba(0,0,0,1)"
          lineHeight="20px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="270px"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="87px"
          left="25px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Yum is your one stop shop to find the best food that you and all your friends want!"
          {...getOverrideProps(
            overrides,
            "Yum is your one stop shop to find the best food that you and all your friends want!"
          )}
        ></Text>
      </View>
    </Flex>
  );
}
