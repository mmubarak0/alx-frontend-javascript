import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [signUpUser(firstName, lastName), uploadPhoto(fileName)];
  return Promise.allSettled(promises).then((r) => {
    const result = [];
    r.forEach((res) => {
      if (res.status === 'rejected') {
        result.push({
          status: res.status,
          value: res.reason.toString(),
        });
      } else {
        result.push({
          status: res.status,
          value: res.value,
        });
      }
    });
    return result;
  });
}
