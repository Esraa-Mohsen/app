import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import Login from "@/Components/login";
import { Component } from "react";
import Signin from '@/Components/signin/signin';




export default function HomePage() {
   return (
      <>
      <Login />
     {/* <Signin /> */}
      
      </>
   );
}