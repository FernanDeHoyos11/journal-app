
import ReactDOM from 'react-dom/client'
import { JournalApp } from './JournalApp'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store'

ReactDOM.createRoot(document.getElementById('root')).render(
 <Provider store={store}>
    <BrowserRouter>
      <JournalApp/>
    </BrowserRouter>
 </Provider>
 
)
