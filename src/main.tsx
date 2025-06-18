import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import ResumeRenderer from './ResumeRenderer';


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ResumeRenderer />
    </StrictMode>,
)
