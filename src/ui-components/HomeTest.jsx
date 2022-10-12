/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function HomeTest(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="732.09px"
      height="891px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "HomeTest")}
    >
      <Image
        position="absolute"
        top="7.54%"
        bottom="0%"
        height="92.46%"
        left="0%"
        right="0%"
        width="100%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "HomeTest31462781")}
      ></Image>
      <Text
        fontFamily="Inter"
        fontSize="79.0594482421875px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="79.0594482421875px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="147.05px"
        height="67.2px"
        position="absolute"
        top="71.94px"
        left="292.52px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="test"
        {...getOverrideProps(overrides, "test")}
      ></Text>
    </View>
  );
}
