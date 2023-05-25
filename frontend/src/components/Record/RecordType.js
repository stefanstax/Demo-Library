import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import useLibraryContext from "../../hooks/use-library-context";
import { useEffect } from "react";

const RecordType = ({ onSelect }) => {
    const { recordTypes, fetchRecordTypes } = useLibraryContext();

    useEffect(() => {
        fetchRecordTypes();
    }, []);

    const renderRecordTypes = recordTypes.map((recordType) => (
        <MenuItem key={recordType.value} value={recordType.value}>
            {recordType.title}
        </MenuItem>
    ));

    const handleRecordType = (event) => {
        onSelect(event.target.value);
    };

    return (
        <FormControl fullWidth>
            <InputLabel>Select Record Type...</InputLabel>
            <Select label="Select Record Type..." onChange={handleRecordType}>
                {renderRecordTypes}
            </Select>
        </FormControl>
    );
};

export default RecordType;
