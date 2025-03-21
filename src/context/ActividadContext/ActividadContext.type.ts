export namespace ActividadContextType{
    export type Props={
        children:JSX.Element;
    };

    export type Context={
        totalAct:number;
        totalCompActi:number;
        actividades:[];
        completActi:[];
        abrirFormActi:()=>void;
        crearActividad:()=>void;
        checkCompleto:(id:string,check:boolean)=>void;
    };
}
