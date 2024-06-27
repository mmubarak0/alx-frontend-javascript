import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const promises = [uploadPhoto(), createUser()];
  const result = await Promise.all(promises).catch(() => [null, null]);
  return { photo: result[0], user: result[1] };
}
