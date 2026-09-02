import { useFormik } from "formik"

const FormikForm = () => {
    const formik = useFormik({
        initialValues:{
            name:"",
            email:""
        },
        onSubmit : (values)=>{
            const { name, email } = values;
            console.log(values);
            const payload = {
                name,
                email
            }
            
        }
    })
    const {values,setFieldValue,handleSubmit} = formik
  return (
    <form onSubmit={handleSubmit}>
        <input type="text"  value={values.name} onChange={(e)=> setFieldValue("name",e.target.value) } />
        <input type="email" value={values.email}  onChange={(e)=> setFieldValue("email",e.target.value)} />
        <button type="submit">submit</button>
    </form>
  )
}

export default FormikForm