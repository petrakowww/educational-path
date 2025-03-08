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
          <title>Сброс пароля</title>
        </Head>
        <Preview>Сбросьте пароль, нажав на кнопку ниже.</Preview>
        <Body className="bg-gray-100 text-gray-900 font-sans">
          <Container className="mx-auto max-w-lg px-6 py-8 bg-white rounded-lg shadow-md">
            <Section className="text-center">
              <Heading className="text-2xl font-bold text-gray-800">Сброс пароля</Heading>
              <Text className="text-gray-600">
                Здравствуйте! Вы запросили сброс пароля. Нажмите на кнопку ниже, чтобы создать новый пароль:
              </Text>
              <Button
                href={resetLink}
                className="bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow hover:bg-green-700 transition-all"
              >
                Сбросить пароль
              </Button>
              <Text className="text-gray-500 text-sm mt-4">
                Эта ссылка действительна в течение <strong>1 часа</strong>. 
                Если вы не запрашивали сброс пароля, просто проигнорируйте это письмо.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
