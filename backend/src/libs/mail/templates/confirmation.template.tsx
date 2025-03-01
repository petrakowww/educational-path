import { Body, Button, Container, Head, Heading, Html, Preview, Section, Tailwind, Text } from "@react-email/components";
import * as React from "react";

interface ConfirmationTemplateProps {
  domain: string;
  token: string;
}

export function ConfirmationTemplate({ domain, token }: ConfirmationTemplateProps) {
  const confirmLink = `${domain}/auth/new-verification?token=${token}`;

  return (
    <Html>
      <Tailwind>
        <Head>
          <title>Email Confirmation</title>
        </Head>
        <Preview>Confirm your email address to complete the registration.</Preview>
        <Body className="bg-gray-100 text-gray-900 font-sans">
          <Container className="mx-auto max-w-lg px-6 py-8 bg-white rounded-lg shadow-md">
            <Section className="text-center">
              <Heading className="text-2xl font-bold text-gray-800">Email Confirmation</Heading>
              <Text className="text-gray-600">
              Hi! To confirm your email address, click the button below:
              </Text>
              <Button
                href={confirmLink}
                className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow hover:bg-blue-700 transition-all"
              >
                Confirm email
              </Button>
              <Text className="text-gray-500 text-sm mt-4">
              This link is valid for <strong>1 hour</strong>. If you have not requested confirmation, simply ignore this message.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
