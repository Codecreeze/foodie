import { createTheme } from "@mui/material";

declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
        dashed: true;
    }
}

declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        h3Weight700?: true;
        subtitle1Weight700?: true;
        subtitle1Weight600?: true;
        h2Weight700?: true;
        subtitle2Weight400?: true;
        h1Weight700?: true;
    }
}

declare module '@mui/material/TextField' {
    interface TextFieldPropsSizeOverrides {
        mediumFont16?: true;
        large?: true;
    }
}

// Light Theme
export const lightTheme = createTheme({
    palette: {
        mode: 'light',
    },
    shape: {
        borderRadius: 5,
    },
    components: {
        MuiContainer: {
            styleOverrides: {
                root: {
                    margin: '0px !important',
                    padding: '0px !important',
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    fontFamily: 'Montserrat !important',
                },
            },
        },
        MuiButtonBase: {
            styleOverrides: {
                root: {
                    fontFamily: 'Montserrat !important',
                },
            },
        },
        MuiListItem: {
            styleOverrides: {
                root: {
                    fontFamily: 'Montserrat',
                    '&:hover': {
                        backgroundColor:
                            'linear-gradient(to right, rgba(0, 146, 166, 15%) 0%, rgba(22, 22, 250, 15%) 100%)',
                    },
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiInputBase-root': {
                        fontFamily: 'Montserrat',
                        padding: '4px',
                        borderRadius: 10,
                        '& fieldset': {
                            border: '1px solid #8c8c8c',
                        },
                    },
                    '& .MuiInputLabel-root': {
                        fontFamily: 'Montserrat',
                        color: '#CCCCCC',
                        fontWeight: 400,
                        margin: '0',
                    },
                    '& .Mui-focused': {
                        '& .MuiInputLabel-root': {
                            color: '#282828',
                            fontWeight: 400,
                        },
                        '& fieldset': {
                            boxShadow: '0px 0px 0px 6px rgba(0, 92, 229, 0.05)',
                        },
                        '& .MuiOutlinedInput-notchedOutline': {
                            border: '1px solid var(--005-ce-6, #99C2FF)',
                        },
                    },
                },
            },
            defaultProps: {
                size: 'small',
            },
            variants: [
                {
                    props: { size: 'small' },
                    style: { '& .MuiInputBase-root': { fontSize: 16 } },
                },
                {
                    props: { size: 'medium' },
                    style: { '& .MuiInputBase-root': { fontSize: 16 } },
                },
                {
                    props: { size: 'large' },
                    style: { '& .MuiInputBase-root': { fontSize: 16, padding: 16 } },
                },
                {
                    props: { size: 'mediumFont16' },
                    style: {
                        fontSize: 16,
                        '& .MuiInputBase-root': {
                            borderRadius: 0,
                            '& fieldset': {
                                border: '1px solid #fff',
                            },
                            '&:hover fieldset': {
                                borderColor: '#fff',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#fff',
                            },
                        },
                        '& .MuiInputBase-input': {
                            padding: '0',
                        },
                    },
                },
                {
                    props: { variant: 'outlined' },
                    style: {
                        '&.MuiTextField-root': {
                            // backgroundColor: '#F5F5F5',
                            borderRadius: 10,
                            minHeight: '48px',
                            // '& fieldset': { border: 'none' },
                        },
                        '& .MuiInputBase-input': {
                            border: 'none',
                            '&::placeholder': {
                                color: '#c7c7c7',
                                opacity: 1,
                            },
                        },
                        '& .MuiOutlinedInput-notchedOutline': {
                            border: 'none',
                            '& .fieldset': {
                                border: 'none',
                            },
                        },
                        '& .Mui-error': {
                            backgroundColor: 'rgba(255, 207, 204, 0.30)',
                        },
                    },
                },
            ],
        },
        MuiAutocomplete: {
            styleOverrides: {
                root: {
                    '& .MuiAutocomplete-inputRoot': {
                        fontSize: '16px',
                        fontFamily: 'Montserrat',
                        minHeight: '48px',
                        borderRadius: '10px',
                        padding: '12px 0px 12px 12px',
                    },
                    paper: {
                        '& .MuiAutocomplete-option': {
                            fontSize: '126px',
                            fontFamily: 'Montserrat',
                        },
                    },
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 10,
                    textTransform: 'none',
                    fontWeight: 700,                   
                    "&.MuiButton-contained": {
                        backgroundColor: "#ff7f50",
                        "&:hover": {
                            backgroundColor: "#006666",
                        },
                    },
                    "&.MuiButton-text": {
                        padding: 0
                    },
                    fontFamily: 'Montserrat !important',
                    '&.MuiButton-outlinedPrimary': {
                        color: '#282828',
                        borderColor: '#E6E6E6',                        
                    },
                    '&.MuiButton-textPrimary:hover': {
                        color: '#282828',
                        padding: 0
                    },
                    // Add background color for the loading button
                    '&.MuiButton-loading': {
                        backgroundColor: '#005CE6',
                    },
                    '&.Mui-disabled': {
                        backgroundColor: '#cddffb',
                        color: '#ffffff',
                    },
                },
            },
            defaultProps: {
                size: 'small',
            },
            variants: [
                { props: { size: 'small' }, style: {} },
                {
                    props: { size: 'medium' },
                    style: { paddingTop: '8px', paddingBottom: '8px' },
                },
                {
                    props: { variant: 'text' },
                    style: { lineHeight: '40px', fontWeight: 400, fontSize: '14px' },
                },
                {
                    props: { size: 'large' },
                    style: {
                        fontSize: '20px',
                        lineHeight: '24px',
                        padding: '16px',
                        minWidth: '164px',
                    },
                },
                {
                    props: { color: 'secondary' },
                    style: { backgroundColor: '#F5F5F5', color: '#282828' },
                },
            ],
        },
        MuiTable: {
            styleOverrides: {
                root: {
                    fontFamily: 'Montserrat',
                    border: '1px solid #E6E6E6',
                },
            },
        },
        MuiStack: {
            styleOverrides: {
                root: {
                    fontFamily: 'Montserrat',
                },
            },
        },
    },
});

// Dark Theme
export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
    shape: {
        borderRadius: 5,
    },
    components: {
        MuiContainer: {
            styleOverrides: {
                root: {
                    margin: '0px !important',
                    padding: '0px !important',
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    fontFamily: 'Montserrat ',
                },
            },
        },
        MuiButtonBase: {
            styleOverrides: {
                root: {
                    fontFamily: 'Montserrat !important',
                },
            },
        },
        MuiListItem: {
            styleOverrides: {
                root: {
                    fontFamily: 'Montserrat',
                    '&:hover': {
                        backgroundColor:
                            'linear-gradient(to right, rgba(0, 146, 166, 15%) 0%, rgba(22, 22, 250, 15%) 100%)',
                    },
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiInputBase-root': {
                        fontFamily: 'Montserrat',
                        padding: '4px',
                        borderRadius: 10,
                        '& fieldset': {
                            border: '1px solid #E6E6E6',
                        },
                    },
                    '& .MuiInputLabel-root': {
                        fontFamily: 'Montserrat',
                        color: '#CCCCCC',
                        fontWeight: 400,
                        margin: '0',
                    },
                    '& .Mui-focused': {
                        '& .MuiInputLabel-root': {
                            color: '#282828',
                            fontWeight: 400,
                        },
                        '& fieldset': {
                            boxShadow: '0px 0px 0px 6px rgba(0, 92, 229, 0.05)',
                        },
                        '& .MuiOutlinedInput-notchedOutline': {
                            border: '1px solid var(--005-ce-6, #99C2FF)',
                        },
                    },
                },
            },
            defaultProps: {
                size: 'small',
            },
            variants: [
                {
                    props: { size: 'small' },
                    style: { '& .MuiInputBase-root': { fontSize: 16 } },
                },
                {
                    props: { size: 'medium' },
                    style: { '& .MuiInputBase-root': { fontSize: 16 } },
                },
                {
                    props: { size: 'large' },
                    style: { '& .MuiInputBase-root': { fontSize: 16, padding: 16 } },
                },
                {
                    props: { size: 'mediumFont16' },
                    style: {
                        fontSize: 16,
                        '& .MuiInputBase-root': {
                            borderRadius: 0,
                            '& fieldset': {
                                border: '1px solid #fff',
                            },
                            '&:hover fieldset': {
                                borderColor: '#fff',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#fff',
                            },
                        },
                        '& .MuiInputBase-input': {
                            padding: '0',
                        },
                    },
                },
                {
                    props: { variant: 'outlined' },
                    style: {
                        '&.MuiTextField-root': {
                            // backgroundColor: '#F5F5F5',
                            borderRadius: 10,
                            minHeight: '48px',
                            // '& fieldset': { border: 'none' },
                        },
                        '& .MuiInputBase-input': {
                            border: 'none',
                            '&::placeholder': {
                                color: '#c7c7c7',
                                opacity: 1,
                            },
                        },
                        '& .MuiOutlinedInput-notchedOutline': {
                            border: 'none',
                            '& .fieldset': {
                                border: 'none',
                            },
                        },
                        '& .Mui-error': {
                            backgroundColor: 'rgba(255, 207, 204, 0.30)',
                        },
                    },
                },
            ],
        },
        MuiAutocomplete: {
            styleOverrides: {
                root: {
                    '& .MuiAutocomplete-inputRoot': {
                        fontSize: '16px',
                        fontFamily: 'Montserrat',
                        minHeight: '48px',
                        borderRadius: '10px',
                        padding: '12px 0px 12px 12px',
                    },
                    paper: {
                        '& .MuiAutocomplete-option': {
                            fontSize: '126px',
                            fontFamily: 'Montserrat',
                        },
                    },
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 10,
                    textTransform: 'none',
                    fontWeight: 700,
                    fontFamily: 'Montserrat !important',
                    "&.MuiButton-contained": {
                        backgroundColor: "#669900",
                        "&:hover": {
                            backgroundColor: "#ffa366",
                        },
                    },
                    "&.MuiButton-text": {
                        padding: 0,
                        "&:hover": {
                            color: "#4d94ff !important",
                        },
                    },
                    '&.MuiButton-outlinedPrimary': {
                        color: '#282828',
                        borderColor: '#E6E6E6',
                    },
                    '&.MuiButton-textPrimary:hover': {
                        color: '#282828',
                    },
                    // Add background color for the loading button
                    '&.MuiButton-loading': {
                        backgroundColor: '#005CE6',
                    },
                    '&.Mui-disabled': {
                        backgroundColor: '#cddffb',
                        color: '#ffffff',
                    },
                },
            },
            defaultProps: {
                size: 'small',
            },
            variants: [
                { props: { size: 'small' }, style: {} },
                {
                    props: { size: 'medium' },
                    style: { paddingTop: '8px', paddingBottom: '8px' },
                },
                {
                    props: { variant: 'text' },
                    style: { lineHeight: '40px', fontWeight: 400, fontSize: '14px' },
                },
                {
                    props: { size: 'large' },
                    style: {
                        fontSize: '20px',
                        lineHeight: '24px',
                        padding: '16px',
                        minWidth: '164px',
                    },
                },
                {
                    props: { color: 'secondary' },
                    style: { backgroundColor: '#F5F5F5', color: '#282828' },
                },
            ],
        },
        MuiTable: {
            styleOverrides: {
                root: {
                    fontFamily: 'Montserrat',
                    border: '1px solid #E6E6E6',
                },
            },
        },
        MuiStack: {
            styleOverrides: {
                root: {
                    fontFamily: 'Montserrat',
                },
            },
        },
    },
});

// Retrieve theme from local storage or use light theme by default
export const getTheme = (): string => {
    return localStorage.getItem('theme') || 'light';
};

// Save theme to local storage
export const setTheme = (theme: string): void => {
    localStorage.setItem('theme', theme);
};
