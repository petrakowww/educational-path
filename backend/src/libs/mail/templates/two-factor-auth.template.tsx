import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Preview,
    Section,
    Tailwind,
    Text,
  } from "@react-email/components";
  import * as React from "react";
  
  interface TwoFactorAuthTemplateProps {
    token: string;
  }
  
  export function TwoFactorAuthTemplate({ token }: TwoFactorAuthTemplateProps) {
    return (
      <Html>
        <Tailwind>
          <Head>
            <title>Two-Factor Authentication</title>
          </Head>
          <Preview>Your two-factor authentication code is here.</Preview>
          <Body className="bg-gray-100 text-gray-900 font-sans">
            <Container className="mx-auto max-w-lg px-6 py-8 bg-white rounded-lg shadow-md">
              <Section className="text-center">
                <Heading className="text-2xl font-bold text-gray-800">
                  Two-Factor Authentication
                </Heading>
                <Text className="text-gray-600">
                  Hi! Please use the following code to complete your two-factor authentication:
                </Text>
                <Text className="text-2xl font-bold text-blue-600 my-4">
                  {token}
                </Text>
                <Text className="text-gray-500 text-sm mt-4">
                  If you did not request this code, simply ignore this email.
                </Text>
              </Section>
            </Container>
          </Body>
        </Tailwind>
      </Html>
    );
  }
  