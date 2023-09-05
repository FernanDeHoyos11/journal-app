import React from 'react'
import ReactDOM from 'react-dom/client'
import { JournalApp } from './JournalApp'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
 
    <BrowserRouter>
    <JournalApp/>
    </BrowserRouter>
 
)
