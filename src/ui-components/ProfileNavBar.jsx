/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import { Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function ProfileNavBar(props) {
  const { prof, overrides, ...rest } = props;
  const vectorOnClick = useNavigateAction({
    type: "url",
    url: `${"/createprof/"}${prof?.id}`,
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
      <Flex
        gap="20px"
        direction="row"
        width="320px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="calc(50% - 39px - 0px)"
        left="0%"
        right="0%"
        padding="24px 0px 24px 0px"
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
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src="https://master.d2ls4m7uqru7rh.amplifyapp.com/home2.png"
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
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="PROFILE"
          {...getOverrideProps(overrides, "PROFILE")}
        ></Text>
        <Icon
          width="20px"
          height="20px"
          viewBox={{ minX: 0, minY: 0, width: 20, height: 20 }}
          paths={[
            {
              d: "M2 2L18 2L18 14L3.17 14L2 15.17L2 2ZM2 0C0.9 0 0.00999999 0.9 0.00999999 2L0 20L4 16L18 16C19.1 16 20 15.1 20 14L20 2C20 0.9 19.1 0 18 0L2 0ZM4 10L12 10L12 12L4 12L4 10ZM4 7L16 7L16 9L4 9L4 7ZM4 4L16 4L16 6L4 6L4 4Z",
              fill: "rgba(255,255,255,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          onClick={() => {
            vectorOnClick();
          }}
          {...getOverrideProps(overrides, "Vector")}
        ></Icon>
      </Flex>
    </View>
  );
}
