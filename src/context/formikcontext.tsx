import { useFormik } from "formik";
import { createContext, useContext, type ReactNode } from "react"
import { users } from "../constants/formik-constants";
export const formikContext = createContext<any>(null);
const FormikContext = ({children}: {children: ReactNode}) => {
    const formik = useFormik({
        initialValues:{
            users,
        },
        onSubmit:(value)=>console.log('formik',value),
    })
    const formikValues= {
        formik,
    }
  return (
    <formikContext.Provider value={formikValues}>
        {children}
    </formikContext.Provider>
  )
}

export default FormikContext

export const useFormikContext = ()=>{
    const context = useContext(formikContext);
    if(!context){
        throw new Error('formik is use inside the formik proivder');
    }
    return context;
}