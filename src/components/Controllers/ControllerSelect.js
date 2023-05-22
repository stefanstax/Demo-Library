import { Controller, useForm } from 'react-hook-form';
import { Select } from '@mui/material';

const ControllerSelect = ({ options, fieldName }) => {
    const { control } = useForm();
    return (
        <Controller
            name={fieldName}
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
                <Select label="Select Genre..." {...field}>
                    {options}
                </Select>
            )}
        />
    );
};

export default ControllerSelect;
