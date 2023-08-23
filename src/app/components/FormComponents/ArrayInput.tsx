'use client'
import { FieldArray, useField, ErrorMessage } from 'formik';
import * as Yup from 'yup';

interface ArrayInputProps {
    name: string;
  }

const ArrayInput = ({ name, placeholder } : any) => {
    const [, meta, helpers] = useField(name);
    const handleAddField = () => {
        const newValue = meta.value ? [...meta.value, ''] : [''];
        helpers.setValue(newValue);
      };
    
      const handleFieldChange = (index: number, value: string) => {
        const newValue = [...meta.value];
        newValue[index] = value;
        helpers.setValue(newValue);
      };
    
      const handleRemoveField = (index: number) => {
        const newValue = [...meta.value];
        newValue.splice(index, 1);
        helpers.setValue(newValue);
      };
    
      return (
        <div>
          {meta.value?.map((value: string, index: number) => (
            
            <div key={index} className='mb-4'>
              
              <div className=' space-y-4'>
                <div>
              <label htmlFor={`${name}.${index}`}>{name.toUpperCase()} {index + 1}</label>
              <input
              className="border text-black border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
              placeholder={placeholder}
                id={`${name}.${index}`}
                name={`${name}.${index}`}
                onChange={(e) => handleFieldChange(index, e.target.value)}
                value={value}
              />
              </div>
              <div>
              <button type="button" onClick={() => handleRemoveField(index)} className='bg-red-900 text-white font-bold px-4 py-2 rounded'>
                Remove
              </button>
              <ErrorMessage name={name} component="div" />
              </div>
              </div>
            </div>
          ))}
          <button type="button" onClick={handleAddField} className='bg-pink-900 text-white font-bold px-4 py-2 rounded my-2'>
            Add {name}  Field
          </button>
          
        </div>
      );
}
export default ArrayInput