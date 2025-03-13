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
  
  interface ChangeEmailTemplateProps {
    token: string;
    newEmail: string;
  }
  
  export function ChangeEmailTemplate({ token, newEmail }: ChangeEmailTemplateProps) {
    return (
      <Html>
        <Tailwind>
          <Head>
            <title>Подтверждение смены почты</title>
          </Head>
          <Preview>Код подтверждения смены почты</Preview>
          <Body className="bg-gray-100 text-gray-900 font-sans">
            <Container className="mx-auto max-w-lg px-6 py-8 bg-white rounded-lg shadow-md">
              <Section className="text-center">
                <Heading className="text-2xl font-bold text-gray-800">
                  Подтверждение смены почты
                </Heading>
                <Text className="text-gray-600">
                  Вы запросили смену почты. Ваша новая почта:{" "}
                  <span className="font-semibold text-gray-800">{newEmail}</span>.
                </Text>
                <Text className="text-gray-600">
                  Введите следующий код для подтверждения:
                </Text>
                <Text className="text-2xl font-bold text-green-600 my-4">
                  {token}
                </Text>
                <Text className="text-gray-500 text-sm mt-4">
                  Если вы не запрашивали смену почты, просто проигнорируйте это письмо.
                </Text>
              </Section>
            </Container>
          </Body>
        </Tailwind>
      </Html>
    );
  }
  