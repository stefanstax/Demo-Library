import { Controller, useForm } from 'react-hook-form';
import { TextField } from '@mui/material';

const ControllerText = ({ fieldName, label }) => {
    const { control } = useForm({
        defaultValues: {
            fieldName: '',
        },
    });
    return (
        <Controller
            name={fieldName}
            control={control}
            rules={{ required: true }}
            render={({ field }) => <TextField label={label} {...field} />}
        />
    );
};

// Include prop types for fieldName to be required

export default ControllerText;
