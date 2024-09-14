import { createRoot } from 'react-dom/client'
import App from './components/App.tsx'
import '../index.css'
import store from './state/store.ts';
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <App />
    </Provider>
)
