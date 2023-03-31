import Head from 'next/head'
import Link from "next/link";
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { GrGrow as Grow } from "@react-icons/all-files/gr/GrGrow";
import { GrUpdate as Update } from "@react-icons/all-files/gr/GrUpdate";
import { FaRegSmileWink as Smile } from "@react-icons/all-files/fa/FaRegSmileWink";

import Layout from '@/components/layout/layout'
import Card from '@/components/cards/card'
import {InputText, TextArea} from '@/components/input/input'
import Fag from '@/components/fag/fag';
import LinkButton from '@/components/link_button/button';

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {

 const handleSubmit = () =>{
   
  }

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
             <div className='welcome_buttons flex'> 
             <LinkButton 
               text= 'Download'
               padding = '20px 60px'
               border = '3'
               color='#132f4c'
             />   
             <LinkButton 
               text={'Support Us'}
               padding = '20px 60px'
               border = '3'
               color= '#004de4'
               
             />  </div>
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
              title = "Business Growth"
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

    <section className='fag-container c-flex'>
       <div className='fag_inner_wrapper c-flex'>
          <h2>FAQ</h2>
          <div className='fag-wrapper c-flex'>
             <Fag className="Fag"
             question='Why lakyPOS  and what do we use it for ?'
             num = '01'
             >
                 <p>LakyPOS is a point of sale software for 
                 managing, tracking sales data and sales 
                 transaction of a retails shop.   
                 The LakyPOS team is working greatly to 
                 release a new version for Windows,  
                 Linux, Mac, and Android devices</p>

             </Fag>

             <Fag className="Fag"
             question='What is the difference between lakyPOS and lakyPhonePOS ?'
             num = '02'
             >
                <p>LakyPOS is a newer version of <Link href=''><span className='fag_links'>LakyPhonePOS</span> </Link> . 
                 After 8years of working experience in mobile phone services and sales, 
                 the developer <Link href=''><span className='fag_links'>(Lawrence Addai Kusi ) </span> </Link> 
                 came out with the first version of this software named “LakyPhonePOS” 
                 to manage sales transactions and automate other repetitive tasks at 
                 the mobile phone shop.  The new version is a general-purpose POS software 
                 to manage sales and transactions hence the name lakyPOS. 
                 The new version also comes with other new features and it will be launched in 
                 August 2023. <Link href=''><span className='fag_links'>Notified Me</span></Link>  when released</p>
             </Fag>

             <Fag className="Fag"
             question='Is lakyPOS free to use?'
             num = '03'
             >
              <p>
                  LakyPOS is a free software under the <Link href=''><span className='fag_links'> MIT Licence. </span></Link>   
                   It aimed to help you grow your company. 
                  You do not require to pay any money before using this software.
                   Thanks to the lakyPOS team. You can support 
                   lakyPOS project to help us provide better solutions and seamless features.  
                   <Link href=''><span className='fag_links'> Support Us  </span></Link> Or<Link href=''><span className='fag_links'> Join Our Team</span> </Link>  
             </p>


             </Fag>
            
          </div>
       </div>
    </section>

     <section className='contact_us flex'> 
        <h2>Support</h2>
        <div className='contact_us_wrapper '>
          <div className='contact_note '>
             <h3>Contact US</h3>
             <p> Your feedback is important to Us. </p>
             <p>Our team is here to help you get support, answers to your questions,
              suggestions and make sure you get great user experience with our products.</p> 
          </div>
          <div className='form_wrapper -c-flex'>
             <form onSubmit={handleSubmit} className='contact_form c-flex'>
                  <div className='form_divider c-flex'>
                     <div className='form_name'>
                        <InputText  label='Name' name='name'/>
                     </div>
                      <div className='form_email'>
                         <InputText  label='Email' name='email'/>
                      </div>
                  </div>
       
                <div className='form_text' >
                     <TextArea label="Message" name="message" maxLength='500'/>
                </div>
                <div className='contact_btn_wrapper flex' >
                     <LinkButton 
                        text= 'Submit'
                        padding = '15px 40px'
                        border = '3'
                        color='#132f4c'
                      /> 
                </div>
                
             </form>
          </div>
        </div>
     </section>


    </Layout>
  )
}
