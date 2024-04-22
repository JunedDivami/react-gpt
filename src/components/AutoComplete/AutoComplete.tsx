import React, { useState, useEffect, ChangeEvent } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';

interface Props {
  fetchSuggestions: (query: string) => Promise<string[]>;
  label?: string;
}

const AutoComplete: React.FC<Props> = ({
  fetchSuggestions,
  label = 'Search'
}) => {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (event: ChangeEvent<{}>, value: string) => {
    if (value.length > 1) { // Trigger the search when there are more than or equal to 2 characters
      setLoading(true);
      fetchSuggestions(value).then(data => {
        setOptions(data);
        setLoading(false);
      });
    }
  };

  return (
    <Autocomplete
      freeSolo
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      onInputChange={handleSearch}
      getOptionLabel={(option) => option}
      options={options}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
    />
  );
};

export default AutoComplete;
