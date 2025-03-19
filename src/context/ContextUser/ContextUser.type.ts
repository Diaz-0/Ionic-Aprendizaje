export namespace ContextUserTypes{
    export type Props={
        children:JSX.Element;
    }

    export type Context={
        username: string;
        avatar: string;
        onchangeUsername: (username:string) => void;
        onchangeAvatar: (avatar:string) => void;
    }
}