'use client'
import * as React from "react";
import { useRouter } from "next/navigation";

import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

interface FormValues {
    teacherId: string,
    description: string,
}

interface Props {
    teacherId: string,
}

export default function AddQualification({ teacherId }: Props) {
    const router = useRouter();

    const initialValues: FormValues = {
        teacherId: teacherId,
        description: "",
    };

    const validationSchema = Yup.object({
        description: Yup.string().min(5, "You Should Enter at least 5 chars").required("This is required info"),
    });

    const handleSubmit = (values: FormValues, { resetForm }: { resetForm: () => void }) => {
        // Here you can handle the form submission, for example, you can send the data to the server using Axios.
        axios.post(`${process.env.NEXT_PUBLIC_API}/qualification/add`, values)
            .then(response => {
                // Handle success
                console.log(response)
            })
            .catch(error => {
                // Handle error
                alert(error + "There was an error")
            })
            .finally(() => {
                resetForm();
                router.refresh();
                router.push('');
            });
    };

    return (
        <div>
            <h2>Add Qualification</h2>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <Form>
                    {/* Hidden input field for teacherId */}
                    <Field type="hidden" name="teacherId" value={teacherId} />
                    
                    <div>
                        <label htmlFor="description">Description</label>
                        <Field type="text" id="description" name="description" />
                        <ErrorMessage name="description" component="div" />
                    </div>
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    );
}
