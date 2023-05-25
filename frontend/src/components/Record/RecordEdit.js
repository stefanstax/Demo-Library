import useLibraryContext from "../../hooks/use-library-context";
import { TextField, MenuItem, Select } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import classNames from "classnames";
import { useEffect } from "react";

const RecordEdit = ({ post, onSave }) => {
    const {
        songCategories,
        fetchSongCategories,
        movieCategories,
        fetchMovieCategories,
        editPost,
    } = useLibraryContext();
    const {
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            author: post?.author,
            title: post?.title,
            genre: post?.genre || {},
            recordType: post?.recordType,
        },
    });

    useEffect(() => {
        fetchMovieCategories();
        fetchSongCategories();
    }, []);

    const onSubmit = (data) => {
        editPost(
            post?._id,
            data.title,
            data.genre,
            data.recordType,
            data.author
        );
        onSave();
    };

    // todo Check - not reading well - works on second trigger of the select
    // const handleCategory = (value) => {
    //     setCategory(value);
    // };
    const songs = songCategories.map((genre) => (
        <MenuItem key={genre.value} value={genre.value}>
            {genre.title}
        </MenuItem>
    ));
    const movies = movieCategories.map((category) => (
        <MenuItem key={category.value} value={category.value}>
            {category.title}
        </MenuItem>
    ));

    const formInvalid = Object.keys(errors);

    const submitButtonClasses = classNames(
        formInvalid?.length ? `opacity-50 cursor-not-allow` : `cursor-pointer`,
        `w-full border border-[1px] border-[#171717] p-3 rounded hover:bg-[#171717] hover:text-white transition-all-all`
    );

    return (
        <form
            fullWidth
            onSubmit={handleSubmit(onSubmit)}
            className="flex justify-center items-start w-full flex-col gap-[10px] mt-8"
        >
            <Controller
                name="author"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                    <TextField
                        label={
                            post?.recordType === "movie"
                                ? "Producer(s)"
                                : "Author(s)"
                        }
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
                    {post?.recordType === "movie"
                        ? "Producer(s) "
                        : "Author(s)    "}
                    name is required
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
                    Title is required
                </p>
            )}

            <Controller
                name="genre"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                    <Select
                        label="Select Genre..."
                        defaultValue={post?.genre}
                        fullWidth
                        {...field}
                    >
                        {post?.recordType === "movie" ? movies : songs}
                    </Select>
                )}
            />
            {errors.genre?.type === "required" && (
                <p
                    className="bg-red-500 w-full text-red-200 p-1 rounded text-center"
                    role="alert"
                >
                    Please select{" "}
                    {post?.recordType === "movie"
                        ? "movie category"
                        : "song genre"}
                </p>
            )}
            <input type="submit" className={submitButtonClasses} />
        </form>
    );
};

export default RecordEdit;
