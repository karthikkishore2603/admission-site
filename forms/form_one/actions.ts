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
    course: string
    district: string
    dob: string,
    email: string,
    name: string,
    phone: number,
    registerNumber: number,
    tentativeCutoff: string
  } = {
    course: (formdata as { course: string }).course,
    district: (formdata as { district: string }).district,  
    email: (formdata as { email: string }).email,
    name: (formdata as { name: string }).name,
    dob: (formdata as { dob: string }).dob,
    phone: (formdata as { phone: number }).phone,
    registerNumber: (formdata as { registerNumber: number }).registerNumber,
    tentativeCutoff: (formdata as { tentativeCutoff: string }).tentativeCutoff
  }
  const { data, error } = await supabase.from("enquiry").insert([sendData])
  console.log(data,sendData)
  if (error) {
    console.error(error)
    return {
      error,
    }
  }
}
