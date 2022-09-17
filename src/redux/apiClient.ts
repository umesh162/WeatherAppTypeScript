import {Wether} from './userListSlice';

type ResponseKind = 'success' | 'failure';

type NetworkResponse<T> = {
  kind: ResponseKind;
  body?: T;
};

export const fetchWethers = async (
  name: string,
): Promise<NetworkResponse<Wether[]>> => {
  console.log(name);
  const response = await fetch(
    `http://api.weatherstack.com/current?access_key=fc4efea61dfde6cf412295e0dca08eef&query=${name}`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  );

  if (response.ok) {
    const json = await response.json();
    return {
      kind: 'success',
      body: json,
    };
  } else {
    return {
      kind: 'failure',
    };
  }
};
