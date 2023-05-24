import { TextField, Typography, MenuItem, Select } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import classNames from "classnames";
import useLibraryContext from "../../hooks/use-library-context";
import { useEffect } from "react";
import { categories } from "../../context/categories";

const CreatePodcast = ({ createPost }) => {
    const { podcastCategories, fetchPodcastCategories } = useLibraryContext();
    const {
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            author: "",
            title: "",
            genre: "",
            recordType: "podcast",
        },
    });

    useEffect(() => {
        fetchPodcastCategories();
    }, []);

    const onSubmit = (data) => {
        createPost(data.title, data.genre, data.recordType, data.author);
        // Reset Form
        reset();
    };

    const options = podcastCategories.map((category) => (
        <MenuItem key={category.value} value={category.value}>
            {category.title}
        </MenuItem>
    ));

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
                Create a new Podcast
            </Typography>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-wrap gap-[10px] justify-center items-center"
            >
                <Controller
                    name="author"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                        <TextField
                            label="Producer(s)"
                            aria-invalid={errors.author ? "true" : "false"}
                            fullWidth
                            {...field}
                        />
                    )}
                />
                {errors.author?.type === "required" && (
                    <p
                        className="bg-red-500 w-full text-red-200 p-1 rounded text-center"
                        role="alert"
                    >
                        Producer name is required
                    </p>
                )}

                <Controller
                    name="title"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                        <TextField label="Title" fullWidth {...field} />
                    )}
                />
                {errors.title?.type === "required" && (
                    <p
                        className="bg-red-500 w-full text-red-200 p-1 rounded text-center"
                        role="alert"
                    >
                        Podcast title name is required
                    </p>
                )}

                <Controller
                    name="genre"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                        <Select label="Genre" fullWidth {...field}>
                            {options}
                        </Select>
                    )}
                />
                {errors.genre?.type === "required" && (
                    <p
                        className="bg-red-500 w-full text-red-200 p-1 rounded text-center"
                        role="alert"
                    >
                        Please select Podcast genre
                    </p>
                )}
                <input type="submit" className={submitButtonClasses} />
            </form>
        </>
    );
};

export default CreatePodcast;
