import {useState, useEffect, createContext} from 'react';
import { ContextUserTypes } from './ContextUser.type';
import {User} from '../../assets'
import {ENV} from '../../utils';


export const ContextUser = createContext<ContextUserTypes.Context>({
    username: "",
    avatar: "",
    onChangeUsername: () => {},
    onChangeAvatar: () => {},
});

export function ProviderUser(props: ContextUserTypes.Props) {
  const { children } = props;
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    const responseUsername = localStorage.getItem(ENV.LOCAL_STORAGE.USERNAME);
    setUsername(responseUsername || "Jesus Diaz");

    const responseAvatar = localStorage.getItem(ENV.LOCAL_STORAGE.AVATAR);
    setAvatar(responseAvatar || User);
  }, []);

  const onChangeUsername = (username: string) => {
    localStorage.setItem(ENV.LOCAL_STORAGE.USERNAME, username);
    setUsername(username);
  };

  const onChangeAvatar = (avatar: string) => {
    localStorage.setItem(ENV.LOCAL_STORAGE.AVATAR, avatar);
    setAvatar(avatar);
  };

  const valueContext: ContextUserTypes.Context = {
    username,
    avatar,
    onChangeUsername,
    onChangeAvatar,
  };

  return (
    <ContextUser.Provider value={valueContext}>{children}</ContextUser.Provider>
  );
}