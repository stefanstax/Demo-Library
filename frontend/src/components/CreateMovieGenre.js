import { TextField, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import classNames from "classnames";
import useLibraryContext from "../hooks/use-library-context";

const CreateMovieGenre = () => {
    const { createMovieCategory } = useLibraryContext();
    const {
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            title: "",
            value: "",
        },
    });

    const onSubmitMovie = (data) => {
        createMovieCategory(data.title, data.value);
        // Reset Form
        reset();
    };

    const formInvalid = Object.keys(errors);

    const submitButtonClasses = classNames(
        formInvalid?.length ? `opacity-50 cursor-not-allow` : `cursor-pointer`,
        `w-full border border-[1px] border-[#171717] p-3 rounded hover:bg-[#171717] hover:text-white transition-all`
    );

    return (
        <>
            <Typography
                variant="h4"
                fontSize={20}
                fontWeight={900}
                textTransform={"uppercase"}
                my={2}
            >
                Create a new movie category
            </Typography>
            <form
                onSubmit={handleSubmit(onSubmitMovie)}
                className="flex flex-wrap gap-[10px] justify-center items-center"
            >
                <Controller
                    name="title"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                        <TextField
                            label="Title"
                            aria-invalid={errors.title ? "true" : "false"}
                            fullWidth
                            {...field}
                        />
                    )}
                />
                {errors.title?.type === "required" && (
                    <p
                        className="bg-red-500 w-full text-red-200 p-1 rounded text-center"
                        role="alert"
                    >
                        Category title is required
                    </p>
                )}
                <Controller
                    name="value"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                        <TextField
                            label="Value"
                            aria-invalid={errors.value ? "true" : "false"}
                            fullWidth
                            {...field}
                        />
                    )}
                />
                {errors.value?.type === "required" && (
                    <p
                        className="bg-red-500 w-full text-red-200 p-1 rounded text-center"
                        role="alert"
                    >
                        Category value is required
                    </p>
                )}
                <input type="submit" className={submitButtonClasses} />
            </form>
        </>
    );
};

export default CreateMovieGenre;
