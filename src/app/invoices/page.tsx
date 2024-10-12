'use client'
import { useEffect, useState } from "react"
import AquaInvoiceFilter from "./filter"
import { useSelector } from "react-redux"
import AquaInvoiceOperations from "@/services/invoices"


const AquaInvoice = () =>{
    const [invoices, setInvoices] = useState([])
    const {user} = useSelector((state:any )=>({...state}))
    const invoicesFtech = async()=>{
      AquaInvoiceOperations.getInvoices(user?.user?.token).then((res)=>{
        console.log(res.data)
        setInvoices(res.data.data)
      })
    } 
    useEffect(()=>{
     invoicesFtech()
    },[])
return(
    <>
    <div className="m-3">
        <AquaInvoiceFilter/>
    <h1>Invoices</h1>
    {invoices.length}
    </div>
    </>
)
}
export default AquaInvoice