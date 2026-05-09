import { Button, Input } from "@mui/material"
import { useFormikContext } from "../context/formikcontext"
const Formik = () => {
  const {formik} = useFormikContext();
    const { values, handleChange, handleSubmit } = formik;
    return (
        <form onSubmit={handleSubmit}>
            <Input
                name="email"
                value={values.email}
                onChange={handleChange}
                type="email"
            />

            <Input
                name="password"
                value={values.password}
                onChange={handleChange}
                type="password"
            />

          <Button variant="outlined" type="submit">Submit</Button>
        </form>
    )
}

export default Formik