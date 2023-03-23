import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/layout/layout'
import Card from '@/components/cards/card'
import InputText from '@/components/input/input'
import { faHandHoldingSeedling } from 'react-icons/fa';
import { GrGrow as Grow } from "@react-icons/all-files/gr/GrGrow";

import { GrUpdate as Update } from "@react-icons/all-files/gr/GrUpdate";
import { FaRegSmileWink as Smile } from "@react-icons/all-files/fa/FaRegSmileWink";


// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <Head>
         <meta name="description" content="Generated by create next app" />

      </Head>
     <section className='welcome flex'>
       <div className='welcome_wrapper flex'>
         <div className='welcome-text'>
             <h2>LAKY POS FOR SMALL AND LARGE BUSINESSES</h2>
             <p className=''>
                Welcome to lakyPOS. <br/>
                Users Preferred Choice Point of Sales 2023.  <br/>
                Free | Fast | User Friendly | Live Update.
             </p>
             {/* <InputText/ > */}
         </div>
         <div className='welcome-img'>
         <Image
              priority
              src='/images/inventory.webp'
              className='img-diagram flex' 
              height={508}
              width={608}
              alt="POS diagram"
            />
         </div>
        </div>
     </section>

    <section className='benefits flex'> 
    
         <h2> BENEFITS </h2>
         <div className='card-wrapper flex'>  
            <Card
              icon =<Grow />
              title = "Free"
              text = ' LakyPOS software is aimed to help you grow your company. You do not require to pay any money before using this project. Thanks to Lakypos team '
            />

            <Card
              icon = <Smile />
              title = "User Friendly"
              text = "Using this software does not require any special training. The interface follows modern and proper design guidelines, making it easy to use.  "
            />

          
            <Card
              icon = <Update />
              title = "Live Update"
              text = " It provides Live update from Sales enable users to gain better insight into their data to make a better decision. Besides the software is updated every 3 months "
            />
         </div>
        
         
     </section>
    </Layout>
  )
}
