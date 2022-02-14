import { useFormik } from 'formik'
import React from 'react'
import { useParams } from 'react-router-dom'

function UserDelete() {
    let params = useParams()
    const formik = useFormik({
        initialValues: {
            Name: "",
            Position: "",
            Office: "",
            Age: 0,
            StartDate: "",
            Salary: ""
        },
        onSubmit: async values => {
            try {
                await fetch(`https://61d19a13da87830017e592a4.mockapi.io/users/${params.id}`, {
                    method: "DELETE",
                    body: JSON.stringify(values),
                    headers: {
                        "Content-type": "application/json"
                    }
                })
                alert("Data Deleted Successfully")

            } catch (error) {
                console.log(error)
            }

        }

    })
    return (
        <div>
            
        </div>
    )
}

export default UserDelete
