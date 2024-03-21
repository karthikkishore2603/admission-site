"use server"

import { createClient } from "@supabase/supabase-js"

// import { Database } from "@/lib/database.types"


export async function submitForm(formdata: unknown) {
  const supabase = createClient(
    "https://qpvwedjwhkvuemnivvdz.supabase.co",
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFwdndlZGp3aGt2dWVtbml2dmR6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTEwMDM3NTQsImV4cCI6MjAyNjU3OTc1NH0.TxzKEg2fNjOQdTqjtaf2eFnfxoxU8WCarVGIzkRTN00'
  )

  // const { data, error } = await supabase
  // .from('scholarship')
  // .insert([
  //   { name: 'sahana', address: 'bangalaorre' },
  // ])
  // .select()

  

  const sendData: {
    name: string
    address: string
    category: string,
    boardofstudy: string,
    dob: string,
    parentmailid: string,
    parentphoneno: number,
    placeofstudy: string,
    regno: number,
    scholarship: string,
    schoolcode: string,
    schoolname: string,
    studentmailid: string,
    studentphoneno: number,
    tentativecutoff: string,
  } = {
    name: (formdata as { name: string }).name,
    address: (formdata as { address: string }).address,
    category: (formdata as { category: string }).category,
    boardofstudy: (formdata as { boardofstudy: string }).boardofstudy,
    dob: (formdata as { dob: string }).dob,
    parentmailid: (formdata as { parentmailid: string }).parentmailid,
    parentphoneno: (formdata as { parentphoneno: number }).parentphoneno,
    placeofstudy: (formdata as { placeofstudy: string }).placeofstudy,
    regno: (formdata as { regno: number }).regno,
    scholarship: (formdata as { scholarship: string }).scholarship,
    schoolcode: (formdata as { schoolcode: string }).schoolcode,
    schoolname: (formdata as { schoolname: string }).schoolname,
    studentmailid: (formdata as { studentmailid: string }).studentmailid,
    studentphoneno: (formdata as { studentphoneno: number }).studentphoneno,
    tentativecutoff: (formdata as { tentativecutoff: string }).tentativecutoff,
  }
  const { data, error } = await supabase.from("scholarship").insert([sendData])
  console.log(data)
  if (error) {
    console.error(error)
    return {
      error,
    }
  }
}
