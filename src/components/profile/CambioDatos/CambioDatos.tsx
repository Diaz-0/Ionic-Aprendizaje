import {IonInput,IonButton} from '@ionic/react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {useUser} from '../../../hooks';

import { CambioDatosType } from './CambioDatos.type';

import './CambioDatos.scss';

export function CambioDatos(props:CambioDatosType.Props) {
  const { onClose } = props;
  const { onChangeUsername } = useUser();

  const formik = useFormik({
    initialValues: {
      nombre: "",
    },
    validationSchema: Yup.object({
      nombre: Yup.string().required("danger"),
    }),
    onSubmit: (formValue) => {
      onChangeUsername(formValue.nombre);
      onClose();
    },
  });

  return (
  <div className="change-dato">
    <IonInput
    name='nombre'
    placeholder="Cambiar nombre"
    autofocus
    color={formik.errors.nombre}
    onIonChange={(e) => formik.setFieldValue("nombre", e.detail.value)}
    />
    <IonButton expand="block" onClick={() => formik.handleSubmit()}>
      Actualizar
    </IonButton>
  </div>
  );
}
