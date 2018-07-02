import { STRINGS } from './../constants/strings';

export const required: any = value => value ? undefined : STRINGS.VALIDATION.REQUIRED;
