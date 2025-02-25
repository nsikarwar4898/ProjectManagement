export interface inputProps {
    placeholder: string;
    width?: string;
    textColor?: string;
    fontWeight?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
