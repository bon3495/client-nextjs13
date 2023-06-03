import api from '@/api/api';

import { TLogInSchema } from '@/lib/validations/login';
import { UserSchema } from '@/lib/validations/user';

export const authLogIn = async (data: TLogInSchema) => {
  const res = await api.post('/api/v1/login', data).then(res => res.data);

  const resParse = UserSchema.parse(res);

  return resParse;
};
