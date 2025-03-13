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
          <title>Двухфакторная аутентификация</title>
        </Head>
        <Preview>Ваш код для двухфакторной аутентификации.</Preview>
        <Body className="bg-gray-100 text-gray-900 font-sans">
          <Container className="mx-auto max-w-lg px-6 py-8 bg-white rounded-lg shadow-md">
            <Section className="text-center">
              <Heading className="text-2xl font-bold text-gray-800">
                Двухфакторная аутентификация
              </Heading>
              <Text className="text-gray-600">
                Здравствуйте! Используйте следующий код для завершения двухфакторной аутентификации:
              </Text>
              <Text className="text-2xl font-bold text-green-600 my-4">
                {token}
              </Text>
              <Text className="text-gray-500 text-sm mt-4">
                Если вы не запрашивали этот код, просто проигнорируйте это письмо.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
