import axios from "axios"

const BASE = process.env.url

const getInvoices = (token:string) =>axios.get(`${BASE}/v1/crm/admin/all-invoices`,{headers:{
    Authorization:`Bearer ${token}`
}})
const AquaInvoiceOperations={
getInvoices
}

export default AquaInvoiceOperations