import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const RecordType = ({ onSelect, recordtypes, recordType }) => {
    const renderRecordTypes = recordtypes.map((recordType) => (
        <MenuItem key={recordType.value} value={recordType.value}>
            {recordType.label}
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
