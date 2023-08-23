import axios from 'axios';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

interface Event {
    _id: string;
    name: string;
    date: Date;
    images: string[];
    department: string;
    attendence: string;
    notableGuests: string[];
}

const AddEvent: React.FC = () => {
    const api = process.env.NEXT_PUBLIC_API;

    const initialValues: Event = {
        _id: '',
        name: '',
        date: new Date(),
        images: [],
        department: '',
        attendence: '',
        notableGuests: [],
    };

    const handleSubmit = async (values: Event, { resetForm }: { resetForm: () => void }) => {
        try {
            const formData = new FormData();
            formData.append('_id', values._id);
            formData.append('name', values.name);
            formData.append('date', values.date.toISOString()); // Convert Date to string format
            formData.append('department', values.department);
            formData.append('attendence', values.attendence);

            // Handle multiple images if any
            values.images.forEach((image, index) => {
                formData.append(`images[${index}]`, image);
            });

            // Handle multiple notable guests if any
            values.notableGuests.forEach((guest, index) => {
                formData.append(`notableGuests[${index}]`, guest);
            });

            // Send the form data to the backend API
            await axios.post(`${api}/event/add`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log('Form data submitted successfully!');
            resetForm();
        } catch (error) {
            // Handle errors if necessary
            console.error('Error submitting form:', error);
            alert('An error occurred while submitting the form.');
        }
    };


    const validationSchema = Yup.object({
        name: Yup.string().required('Department Name is required'),
        date: Yup.date().required('Date is required'),
        department: Yup.string().required('Department is required'),
        attendence: Yup.string().required('Attendance is required'),
        notableGuests: Yup.array().of(Yup.string()), // No specific validation for notableGuests, can be an array of strings
    });

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            <div>
                <Form className="px-4 rounded mx-auto max-w-3xl w-full my-8 Fields space-y-4 mt-8">
                    <div>
                        <h1 className="text-4xl font-bold">Add Event</h1>
                        <p className="text-gray-600">This will add an Event</p>
                    </div>

                    <div>
                        <label htmlFor="name">Event Name</label>
                        <Field
                            className="border text-black border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
                            type="text"
                            name="name"
                            placeholder="Event Name"
                            id="name"
                        />
                        <ErrorMessage name="name" component="div" className="text-red-600" />
                    </div>
                    <div>
                        <label htmlFor="images">Images</label>
                        <Field
                            className="border text-black border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
                            type="file"
                            name="images"
                            multiple // Allow selecting multiple image files
                            id="images"
                        />
                        <ErrorMessage name="images" component="div" className="text-red-600" />
                    </div>
                    <div>
                        <label htmlFor="date">Event Date</label>
                        <Field
                            className="border text-black border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
                            type="date"
                            name="date"
                            id="date"
                        />
                        <ErrorMessage name="date" component="div" className="text-red-600" />
                    </div>

                    <div>
                        <label htmlFor="department">Department</label>
                        <Field
                            className="border text-black border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
                            type="text"
                            name="department"
                            placeholder="Department"
                            id="department"
                        />
                        <ErrorMessage name="department" component="div" className="text-red-600" />
                    </div>

                    <div>
                        <label htmlFor="attendance">Attendance</label>
                        <Field
                            className="border text-black border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
                            type="text"
                            name="attendance"
                            placeholder="Attendance"
                            id="attendance"
                        />
                        <ErrorMessage name="attendance" component="div" className="text-red-600" />
                    </div>

                    <div>
                        <label htmlFor="notableGuests">Notable Guests</label>
                        <Field
                            as="textarea" // Use textarea for array of strings
                            className="border text-black border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
                            name="notableGuests"
                            placeholder="Notable Guests (separated by commas)"
                            id="notableGuests"
                        />
                        <ErrorMessage name="notableGuests" component="div" className="text-red-600" />
                    </div>

                    <button
                        type="submit"
                        className="bg-green-900 text-white uppercase py-2 px-4 rounded font-bold cursor-pointer border-2 border-slate-300 hover:bg-green-500 transition duration-200 ease-in-out"
                    >
                        Submit
                    </button>
                </Form>
            </div>
        </Formik>
    );
};

export default AddEvent;
