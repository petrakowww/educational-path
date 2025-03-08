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
          <title>Подтверждение почты</title>
        </Head>
        <Preview>Подтвердите свой адрес электронной почты для завершения регистрации.</Preview>
        <Body className="bg-gray-100 text-gray-900 font-sans">
          <Container className="mx-auto max-w-lg px-6 py-8 bg-white rounded-lg shadow-md">
            <Section className="text-center">
              <Heading className="text-2xl font-bold text-gray-800">Подтверждение почты</Heading>
              <Text className="text-gray-600">
                Здравствуйте! Чтобы подтвердить ваш адрес электронной почты, нажмите на кнопку ниже:
              </Text>
              <Button
                href={confirmLink}
                className="bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow hover:bg-green-700 transition-all"
              >
                Подтвердить почту
              </Button>
              <Text className="text-gray-500 text-sm mt-4">
                Эта ссылка действительна в течение <strong>1 часа</strong>. 
                Если вы не запрашивали подтверждение, просто проигнорируйте это сообщение.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
