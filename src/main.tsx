import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import ResumeRenderer from './ResumeRenderer';
import TemplateFilter from "./templateFilter.tsx";


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <TemplateFilter/>
        <ResumeRenderer />
    </StrictMode>,
)
