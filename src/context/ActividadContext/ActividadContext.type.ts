import {ActModel} from '../../models';

export namespace ActividadContextType{
    export type Props={
        children:JSX.Element;
    };

    export type Context={
        totalAct:number;
        totalCompActi:number;
        actividades:ActModel[];
        completActi:ActModel[];
        abrirFormActi:()=>void;
        crearActividad:(actividad:ActModel)=>void;
        checkCompleto:(id:string,check:boolean)=>void;
    };
}

