import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Expenses from './routes/Expenses/index.tsx'
import Invoices from './routes/Invoices/index.tsx'
import NotFound from './routes/NotFound/index.tsx'
import Invoice from './routes/Invoices/Invoice/index.tsx'
import InvoicesIndex from './routes/Invoices/InvoicesIdex/index.tsx'
import Welcome from './routes/Welcome/index.tsx'

const baseUrl = process.env.PUBLIC_URL || "";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename={baseUrl}>
    <Routes>
      <Route path={baseUrl} element={<App />} >
        <Route index element={<Welcome />} />
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />} >
          <Route index element={<InvoicesIndex />} />
          <Route path=":invoiceId" element={<Invoice />} />
        </Route>
        <Route path="*" element={<NotFound />} />

      </Route>

    </Routes>
  </BrowserRouter>,
)
