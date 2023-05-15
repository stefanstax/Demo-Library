const RecordType = ({ onSelect, recordtypes, recordType }) => {
    const renderRecordTypes = recordtypes.map((recordType) => (
        <option key={recordType.value} value={recordType.value}>
            {recordType.label}
        </option>
    ));

    const handleRecordType = (event) => {
        onSelect(event.target.value);
    };

    return (
        <select
            onChange={handleRecordType}
            className="p-2 w-full placeholder:text-sm placeholder:text-slate-600"
        >
            {renderRecordTypes}
        </select>
    );
};

export default RecordType;
