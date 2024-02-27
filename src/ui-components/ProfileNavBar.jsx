/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  useAuthSignOutAction,
  useNavigateAction,
} from "./utils";
import { Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function ProfileNavBar(props) {
  const { prof, overrides, ...rest } = props;
  const imageOnClick = useNavigateAction({ type: "url", url: "/" });
  const groupFiveOnClick = useAuthSignOutAction({ global: false });
  const myIconFourThreeZeroSevenOneThreeTwoOnClick = useAuthSignOutAction({
    global: false,
  });
  return (
    <View
      width="320px"
      height="80px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "ProfileNavBar")}
      {...rest}
    >
      <View
        width="320px"
        height="78px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="calc(50% - 39px - 0px)"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(70,45,180,1)"
        {...getOverrideProps(overrides, "NoteNavBa")}
      >
        <Image
          width="30px"
          height="30px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="24px"
          left="79.5px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src="https://master.d2ls4m7uqru7rh.amplifyapp.com/home2.png"
          onClick={() => {
            imageOnClick();
          }}
          {...getOverrideProps(overrides, "image")}
        ></Image>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          lineHeight="24px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="27px"
          left="129.5px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="PROFILE"
          {...getOverrideProps(overrides, "PROFILE")}
        ></Text>
        <View
          padding="0px 0px 0px 0px"
          width="32.5px"
          height="39px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="12px"
          left="216.5px"
          onClick={() => {
            groupFiveOnClick();
          }}
          {...getOverrideProps(overrides, "Group 5")}
        >
          <View
            width="24px"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            position="absolute"
            top="15px"
            left="0px"
            padding="0px 0px 0px 0px"
            onClick={() => {
              myIconFourThreeZeroSevenOneThreeTwoOnClick();
            }}
            {...getOverrideProps(overrides, "MyIcon4307132")}
          >
            <Icon
              width="20px"
              height="14px"
              viewBox={{ minX: 0, minY: 0, width: 20, height: 14 }}
              paths={[
                {
                  d: "M7 8.75C4.66 8.75 0 9.92 0 12.25L0 14L14 14L14 12.25C14 9.92 9.34 8.75 7 8.75ZM2.34 12C3.18 11.42 5.21 10.75 7 10.75C8.79 10.75 10.82 11.42 11.66 12L2.34 12ZM7 7C8.93 7 10.5 5.43 10.5 3.5C10.5 1.57 8.93 0 7 0C5.07 0 3.5 1.57 3.5 3.5C3.5 5.43 5.07 7 7 7ZM7 2C7.83 2 8.5 2.67 8.5 3.5C8.5 4.33 7.83 5 7 5C6.17 5 5.5 4.33 5.5 3.5C5.5 2.67 6.17 2 7 2ZM14.04 8.81C15.2 9.65 16 10.77 16 12.25L16 14L20 14L20 12.25C20 10.23 16.5 9.08 14.04 8.81L14.04 8.81ZM13 7C14.93 7 16.5 5.43 16.5 3.5C16.5 1.57 14.93 0 13 0C12.46 0 11.96 0.13 11.5 0.35C12.13 1.24 12.5 2.33 12.5 3.5C12.5 4.67 12.13 5.76 11.5 6.65C11.96 6.87 12.46 7 13 7Z",
                  fill: "rgba(255,255,255,1)",
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
              left="8.33%"
              right="8.33%"
              {...getOverrideProps(overrides, "Vector4307133")}
            ></Icon>
          </View>
          <View
            width="20px"
            height="20px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            position="absolute"
            top="0%"
            bottom="48.72%"
            left="38.46%"
            right="0%"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "MyIcon4307136")}
          >
            <Icon
              width="15px"
              height="12.5px"
              viewBox={{ minX: 0, minY: 0, width: 15, height: 12.5 }}
              paths={[
                {
                  d: "M5.83333 3.33333L5.83333 0L0 5.83333L5.83333 11.6667L5.83333 8.25C10 8.25 12.9167 9.58333 15 12.5C14.1667 8.33333 11.6667 4.16667 5.83333 3.33333Z",
                  fill: "rgba(255,255,255,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="35%"
              bottom="2.5%"
              left="10%"
              right="15%"
              {...getOverrideProps(overrides, "Vector4307137")}
            ></Icon>
          </View>
        </View>
      </View>
    </View>
  );
}
