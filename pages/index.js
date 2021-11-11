import { useRouter } from 'next/router'
import Layout from './../components/layout/Layout'
import Head from 'next/head';
import Image from 'next/image';

import HomeSpanish from '../content/spanish/home.json';
import HomeEnglish from '../content/english/home.json';

import Link from 'next/link';

export default function Home() {

  let { locale } = useRouter();

  let data = locale === 'es' ? HomeSpanish : HomeEnglish;


  return (
    <Layout>

      <Head>
        <title>{data.head.metaTitle}</title>
        <meta name="description" content={data.head.metaContent}/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="hero">
          <div className="hero__content">
            <h1>{data.hero.h1}</h1>
            <p>{data.hero.description}</p>
            <span className="line line__yellow"></span>
          </div>
        </section>

        <section className="section2">
          <div className="section2__container">

            <div className="section2__container--content">
              <p>{data.section2.content}</p>
              
              <div>
                <Image 
                  src={data.section2.image.src} 
                  alt={data.section2.image.alt} 
                  layout="fill"
                />
              </div>
            </div>

            <div className="btn btn__yellow">
              <Link href={data.section2.cta.path}>
                <a>{data.section2.cta.title}</a>
              </Link>
              <span className="test"></span>
            </div>

          </div>
        </section>

        <section className="section3">
          <h2>{data.section3.title}</h2>
          <p>{data.section3.subtitle}</p>
          <div className="section3__services">
            {
              data.section3.services.map((service, i) => (
                <article key={i}>
                  <div>
                    <Image src={service.image} layout="fill" alt={service.title}/>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.content}</p>
                  
                </article>
              ))
            }
          </div>

        </section>
        
        <section className="section4">

            <div className="section4__content">
              <h2>{data.section4.title}</h2>

              <span className="line line__white"></span>

              <p>{data.section4.content}</p>

              <div className="btn btn__white">
                <Link href={data.section4.cta.path}>
                  <a>{data.section4.cta.title}</a>
                </Link>
                <span></span>
              </div>  

            </div>
          
            <div className="section4__image"></div>

        </section>


        <section className="section5">
            <h2>{data.section5.title}</h2>

          <div className="section5__grid">
            <div className="section5__grid--squares">
              <span className="section5__grid--squares-1"></span>
              <span className="section5__grid--squares-2"></span>
              <span className="section5__grid--squares-3"></span>
              <span className="section5__grid--squares-4"></span>
              <span className="section5__grid--squares-5"></span>
            </div>

            <div className="section5__grid--services">
              {
                data.section5.services.map((service, i) => (
                  <div key={i} className="section5__grid--services-service">
                    <div className="section5__grid--services-service__imgcontainer">
                      <Image 
                        src={service.image}
                        layout="fill"
                        alt={service.title}
                      />
                    </div>
                    <h4>{service.title}</h4>
                    <p>{service.content}</p>
                  </div>
                ))
              }
            </div>
          </div>
              
          <div className="section5__media">
                {
                  data.section5.social_media.map((social, i) => (
                    <div key={i} className="section5__media--item">
                      <Image 
                        src={social.image}
                        alt={social.alt}
                        layout="fill"
                        
                      />
                    </div>
                  ))
                }
          </div>
            
            

        </section>

for

        <section style={{height: '100vh', with: "100%"}}>
        
        </section>

      </main>



    </Layout>
  )
}
