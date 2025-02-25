import Box from '@mui/material/Box';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { inputProps } from './index';

const Input = ({
    placeholder = 'Search for...',
    width = '',
    textColor = '',
    fontWeight = '',
    value = '',
    onChange,
}: inputProps) => {
    return (
        <Box className={`${width ? width : 'w-4/5 md:w-2/5'}`}>
            <TextField
                variant="outlined"
                size="small"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                fullWidth
                sx={{
                    '& .MuiOutlinedInput-root': {
                        borderRadius: '20px',
                    },
                    '& input::placeholder': {
                        color: textColor ? textColor : '#204C5B',
                        opacity: 1,
                        fontWeight: fontWeight ? fontWeight : 600,
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
