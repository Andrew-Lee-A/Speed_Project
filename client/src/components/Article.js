import {useStyles} from '@mui/material'
import theme from '../theme'
import { ThemeProvider } from "@emotion/react";
import PageHeader from "./component-controller/ArticleFormHeader";
import ArticleIcon from '@mui/icons-material/Article';

function SubmitArticle(){
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <PageHeader
                title='Article'
                subTitle='Submit Article'
                icon={<ArticleIcon fontSize='large'/>}
            />
        </ThemeProvider>
    )
}

export default SubmitArticle;