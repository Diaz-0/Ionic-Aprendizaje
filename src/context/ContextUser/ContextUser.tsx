import {useState, useEffect, createContext} from 'react';
import { ContextUserTypes } from './ContextUser.type';
import {User} from '../../assets'
import {ENV} from '../../utils';


export const ContextUser = createContext<ContextUserTypes.Context>({
    username: '',
    avatar: '',
    onchangeUsername: () => {},
    onchangeAvatar: () => {},
});

export function ProviderUser(props:ContextUserTypes.Props) {
    const {children}=props;

    //Estados de variables
    const [username, setUsername]=useState('');
    const [avatar, setAvatar]=useState('');

    const onchangeUsername=(username:string)=>{
        localStorage.setItem(ENV.LOCAL_STORAGE.USERNAME,username);
        setUsername(username);
    };

    const onchangeAvatar=(avatar:string)=>{
        localStorage.setItem(ENV.LOCAL_STORAGE.AVATAR,avatar);
        setAvatar(avatar);
    };

    useEffect(()=>{
        const responseUsername=localStorage.getItem(ENV.LOCAL_STORAGE.USERNAME);
        setUsername(responseUsername || 'Jesus Diaz');

        const responseAvatar=localStorage.getItem(ENV.LOCAL_STORAGE.AVATAR);
        setAvatar(responseAvatar || User);
    },[])


    const valueContext:ContextUserTypes.Context={
        username,
        avatar,
        onchangeUsername,
        onchangeAvatar
    }

    return(
        <ContextUser.Provider value={valueContext}>{children}</ContextUser.Provider>
    )
}

