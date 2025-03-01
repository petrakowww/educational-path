import {
    Body,
    Button,
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
  
  interface ResetPasswordTemplateProps {
    domain: string;
    token: string;
  }
  
  export function ResetPasswordTemplate({ domain, token }: ResetPasswordTemplateProps) {
    const resetLink = `${domain}/auth/new-password?token=${token}`;
  
    return (
      <Html>
        <Tailwind>
          <Head>
            <title>Password Reset</title>
          </Head>
          <Preview>Reset your password by clicking the button below.</Preview>
          <Body className="bg-gray-100 text-gray-900 font-sans">
            <Container className="mx-auto max-w-lg px-6 py-8 bg-white rounded-lg shadow-md">
              <Section className="text-center">
                <Heading className="text-2xl font-bold text-gray-800">Password Reset</Heading>
                <Text className="text-gray-600">
                  Hi! You requested a password reset. Click the button below to create a new password:
                </Text>
                <Button
                  href={resetLink}
                  className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow hover:bg-blue-700 transition-all"
                >
                  Reset Password
                </Button>
                <Text className="text-gray-500 text-sm mt-4">
                  This link is valid for <strong>1 hour</strong>. If you did not request a password reset, please ignore this email.
                </Text>
              </Section>
            </Container>
          </Body>
        </Tailwind>
      </Html>
    );
  }
  