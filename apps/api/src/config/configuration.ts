import { ConfigFactory } from '@nestjs/config/dist/interfaces';
import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';
import ms, { StringValue } from 'ms';

import { Configuration } from './configuration.interface';
dotenvExpand.expand(dotenv.config());

const int = (val: string | undefined, num: number): number =>
  val ? (isNaN(parseInt(val)) ? num : parseInt(val)) : num;
const bool = (val: string | undefined, bool: boolean): boolean =>
  val == null ? bool : val == 'true';

const configuration: Configuration = {
  frontendUrl: process.env.FRONTEND_URL ?? 'http://localhost:7001',

  security: {
    jwtSecret: process.env.JWT_SECRET ?? '',
    accessTokenExpiresIn: process.env.ACCESS_TOKEN_EXPIRS_IN ?? '1h',
    refreshTokenExpiresIn: process.env.REFRESH_TOKEN_EXPIRS_IN ?? '7d',
    validationCodeExpiresIn: new Date(
      Date.now() +
        ms(<StringValue>process.env.VALIDATION_CODE_EXPIRS_IN ?? '1h'),
    ),
    googleOAuth: {
      clientId: process.env.GOOGLE_OAUTH_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET ?? '',
      callbackUrl: process.env.GOOGLE_OAUTH_CALLBACK_URL ?? '',
    },
    linkedinOAuth: {
      clientId: process.env.LINKEDIN_OAUTH_CLIENT_ID ?? '',
      clientSecret: process.env.LINKEDIN_OAUTH_CLIENT_SECRET ?? '',
      callbackUrl: process.env.LINKEDIN_OAUTH_CALLBACK_URL ?? '',
    },
  },

  supabase: {
    apiUrl: process.env.SUPABASE_API_URL ?? '',
    anonKey: process.env.SUPABASE_ANON_KEY ?? '',
  },

  email: {
    name: process.env.EMAIL_NAME ?? 'Onboardly',
    from: process.env.EMAIL_FROM ?? '',
    transport: {
      host: process.env.EMAIL_HOST ?? '',
      port: int(process.env.EMAIL_PORT, 587),
      secure: bool(process.env.EMAIL_SECURE, false),
      auth: {
        user: process.env.EMAIL_USER ?? process.env.EMAIL_FROM ?? '',
        pass: process.env.EMAIL_PASSWORD ?? '',
      },
    },
  },
};

const configFunction: ConfigFactory<Configuration> = () => configuration;
export default configFunction;
