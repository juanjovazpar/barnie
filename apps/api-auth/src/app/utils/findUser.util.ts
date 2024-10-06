import { ICoreUser } from '@barnie/interfaces';
import User from '../models/user.model';
import { HTTP } from '@barnie/constants';

export const getUserByProperty = async (
  propertyName: string,
  propertyValue: string,
): Promise<ICoreUser> => {
  const user: ICoreUser | null = await User.findOne({
    [propertyName]: propertyValue,
  });

  if (!user) {
    const error = new Error('User not found');
    error['statusCode'] = HTTP.CODES.NotFound;
    throw error;
  }

  return user;
};
