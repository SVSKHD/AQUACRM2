'use client'
import Image from "next/image";
import {useSelector} from "react-redux"

const AquaHome = () =>{
const {user} = useSelector((state)=>({...state}))
  return(
  <>
  {user.userState?"hello user":"hello no user "}
  </>
)
}
export default AquaHome