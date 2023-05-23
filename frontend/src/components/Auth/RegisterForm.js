import classNames from 'classnames';
import useLibraryContext from '../../hooks/use-library-context';
import { Controller, useForm } from 'react-hook-form';
import { TextField } from '@mui/material';

const RegisterForm = ({ members }) => {
    const { createUser } = useLibraryContext();
    const {
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            username: '',
            password: '',
        },
    });

    const formInvalid = Object.keys(errors);

    const handleUserCreation = (data) => {
        if (members.find((user) => user?.username === data?.username)) {
            console.warn(
                `Username ${data?.username} has been occupied already.`
            );
        } else {
            createUser(data.username, data.password);
            reset();
        }
    };

    const buttonClasses = classNames(
        `p-3 rounded border-solid border-[1px] border-[#171717]`,
        !formInvalid?.length
            ? `cursor-pointer hover:bg-[#171717] hover:text-white transition-all`
            : `cursor-not-allowed opacity-50`
    );

    const inputClasses = classNames(
        `p-3 w-full placeholder:text-sm placeholder:text-slate-600 bg-transparent border-solid border-[1px] border-[#171717]`
    );

    return (
        <form
            onSubmit={handleSubmit(handleUserCreation)}
            className="flex flex-col gap-[10px] min-w-[300px]"
        >
            <Controller
                name="username"
                control={control}
                rules={{
                    required: true,
                    maxLength: 13,
                    pattern: {
                        value: /^[a-z]+$/,
                        message: 'Username can contain only lowercase letters',
                    },
                }}
                render={({ field }) => (
                    <TextField
                        label="Username"
                        type="text"
                        className={inputClasses}
                        {...field}
                    />
                )}
            />
            {errors.username?.type === 'required' && (
                <p
                    className="bg-red-500 w-full text-red-200 p-1 rounded text-center"
                    role="alert"
                >
                    Username is a required
                </p>
            )}
            {errors.username?.message && (
                <p
                    className="bg-red-500 w-full text-red-200 p-1 rounded text-center"
                    role="alert"
                >
                    {errors?.username?.message}
                </p>
            )}
            {errors.username?.type === 'maxLength' && (
                <p
                    className="bg-red-500 w-full text-red-200 p-1 rounded text-center"
                    role="alert"
                >
                    Username can not exceed 13 characters
                </p>
            )}
            <Controller
                name="password"
                control={control}
                rules={{
                    required: true,
                    maxLength: 16,
                    minLength: 10,
                    pattern: {
                        value: /[a-z]/,
                        message:
                            'Please include one sign, uppercase letter and a number',
                    },
                }}
                render={({ field }) => (
                    <TextField
                        label="Password"
                        type="password"
                        className={inputClasses}
                        {...field}
                    />
                )}
            />
            {errors.password?.type === 'required' && (
                <p
                    className="bg-red-500 w-full text-red-200 p-1 rounded text-center"
                    role="alert"
                >
                    Password is required
                </p>
            )}
            {errors.password?.type === 'minLength' && (
                <p
                    className="bg-red-500 w-full text-red-200 p-1 rounded text-center"
                    role="alert"
                >
                    Minimum password length is 10
                </p>
            )}
            {errors.password?.type === 'maxLength' && (
                <p
                    className="bg-red-500 w-full text-red-200 p-1 rounded text-center"
                    role="alert"
                >
                    Maximum password length is 16
                </p>
            )}
            {errors.password?.type === 'pattern' && (
                <p
                    className="bg-red-500 w-full text-red-200 p-1 rounded text-center"
                    role="alert"
                >
                    {errors?.password?.message}
                </p>
            )}
            <input type="submit" className={buttonClasses} />
        </form>
    );
};

export default RegisterForm;
