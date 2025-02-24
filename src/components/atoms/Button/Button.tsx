import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { buttonProps } from './Button/index';

const CustomButton=({variant='outlined',styles={},name='button'}:buttonProps)=> {
    return (
        <Stack spacing={2} direction="row">
            <Button sx={styles} variant={variant}>{name}</Button>
        </Stack>
    );
}

export default CustomButton