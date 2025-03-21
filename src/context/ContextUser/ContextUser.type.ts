export namespace ContextUserTypes{
    export type Props = {
        children: JSX.Element;
    };
    
    export type Context = {
        username: string;
        avatar: string;
        onChangeUsername: (username: string) => void;
        onChangeAvatar: (avatar: string) => void;
    };
}