import Box from '@mui/material/Box';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { inputProps } from './index';

const Input = ({ placeholder = 'Search for...' }: inputProps) => {
    return (
        <Box className="w-4/5 md:w-2/5">
            <TextField
                variant="outlined"
                size="small"
                placeholder={placeholder}
                fullWidth
                sx={{
                    '& .MuiOutlinedInput-root': {
                        borderRadius: '20px',
                    },
                    '& input::placeholder': {
                        color: '#204C5B',
                        opacity: 1,
                        fontWeight: 600,
                    },
                }}
                slotProps={{
                    input: {
                        endAdornment: (
                            <InputAdornment position="end">
                                <SearchIcon
                                    sx={{
                                        backgroundColor: '#E9F0F3',
                                        borderRadius: '50px',
                                        padding: '2px',
                                        height: '32px',
                                        width: '32px',
                                    }}
                                />
                            </InputAdornment>
                        ),
                    },
                }}
            />
        </Box>
    );
};

export default Input;
