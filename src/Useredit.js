import { useFormik } from 'formik'
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Useredit() {
    let navigate = useNavigate()
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
                    method: "PUT",
                    body: JSON.stringify(values),
                    headers: {
                        "Content-type": "application/json"
                    }
                })
                alert("Data Saved")
                navigate("/Users")

            } catch (error) {
                console.log(error)
            }

        }

    })

    useEffect(async () => {
        try {
            let userdata = await fetch(`https://61d19a13da87830017e592a4.mockapi.io/users/${params.id}`)
            let user = await userdata.json()
            formik.setValues(user )
        } catch (error) {
            console.log(error)
        }
    }, [])


    return (
        <>
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">User Edit</h1>
            </div>
            <div className='container'>
                <form onSubmit={formik.handleSubmit}>
                    <div className='row'>

                        <div className='col-lg-6'>
                            <label>Name</label>
                            <input type="text"
                                name='Name'
                                className='form-control'
                                onChange={formik.handleChange}
                                value={formik.values.Name} />
                        </div>
                        <div className='col-lg-6'>
                            <label>Position</label>
                            <input type="text"
                                name='Position'
                                className='form-control'
                                onChange={formik.handleChange}
                                value={formik.values.Position} />
                        </div>
                        <div className='col-lg-4'>
                            <label>Office</label>
                            <input type="text"
                                name='Office'
                                className='form-control'
                                onChange={formik.handleChange}
                                value={formik.values.Office} />
                        </div>
                        <div className='col-lg-4'>
                            <label>Age</label>
                            <input type="number"
                                name='Age'
                                className='form-control'
                                onChange={formik.handleChange}
                                value={formik.values.Age} />
                        </div>
                        <div className='col-lg-4'>
                            <label>Start Date</label>
                            <input type="date"
                                name='StartDate'
                                className='form-control'
                                onChange={formik.handleChange}
                                value={formik.values.StartDate} />
                        </div>
                        <div className='col-lg-12'>
                            <label>Salary</label>
                            <input type="text"
                                name='Salary'
                                className='form-control'
                                onChange={formik.handleChange}
                                value={formik.values.Salary} />
                        </div>
                        <div className='col-lg-3 mt-3'>
                            <input type="Submit" className='btn btn-primary' />
                        </div>

                    </div>
                </form>
            </div>
        </>
    )
}

export default Useredit
