'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

export function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 modal-grid opacity-20" />
      <div className="hero-blur right-1/4 top-1/3" />

      <div className="container relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Customers Verdict</h2>
          <p className="text-lg text-muted-foreground">
            See what our customers are saying about how DataGenie has transformed their analytics experience.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <Card className="modal-card overflow-hidden">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                  <div className="lg:w-2/3">
                    <blockquote className="text-xl italic text-muted-foreground mb-6">
                      "DataGenie stands out in its approach to Augmented Analytics by effectively retaining what's working well in conventional BI and revamping what's broken. This combined with a great Ux enabled easier user adoption & growth of DataGenie at Farfetch. Data onboarding is swift and seamless, delivering actionable KPI insights autonomously in no time."
                    </blockquote>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="#3FC186" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="#3FC186" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold">Ankit Agarwal</p>
                        <p className="text-sm text-muted-foreground">Head of Data Science, Farfetch</p>
                      </div>
                    </div>
                  </div>

                  <div className="lg:w-1/3 flex justify-center">
                    <div className="relative w-48 h-48">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl opacity-60 blur-xl" />
                      <div className="absolute w-full h-full rounded-3xl overflow-hidden border border-primary/20">
                        <Image
                          src="https://ext.same-assets.com/1434001824/2910835939.png"
                          alt="Farfetch Logo"
                          width={200}
                          height={200}
                          className="object-contain p-6 bg-black/50"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className="mt-24">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Endorsed by <span className="text-primary">Gartner</span> in three major market reports on Augmented Analytics
            </h2>
            <p className="text-lg text-muted-foreground">
              Cited for DataGenie's intuitive & effective Autonomous Story Telling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0 }}
            >
              <Card className="modal-card h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-4 w-10 h-10 rounded-full flex items-center justify-center bg-primary/20">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="#3FC186" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10 7L15 12L10 17" stroke="#3FC186" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Market Guide for Augmented Analytics, 2022</h3>
                  <div className="text-sm text-muted-foreground mb-4">
                    <p>Published 11 October 2022</p>
                    <p>By David Pidsley</p>
                  </div>
                  <p className="text-sm text-muted-foreground flex-grow">
                    Read more about how augmented analytics drives automated data stories into main stream.
                  </p>
                  <div className="mt-4 py-2 border-t border-border/50 text-xs text-muted-foreground">
                    Accessible for Gartner customers
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="modal-card h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-4 w-10 h-10 rounded-full flex items-center justify-center bg-primary/20">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#3FC186" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 17L12 11" stroke="#3FC186" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 7L12.01 7" stroke="#3FC186" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Emerging Tech Impact Radar: Data and Analytics</h3>
                  <div className="text-sm text-muted-foreground mb-4">
                    <p>Published 11 September 2022</p>
                    <p>By Alys Woodward, Radu Miclaus</p>
                  </div>
                  <p className="text-sm text-muted-foreground flex-grow">
                    Read more about how providers are shaping decision intelligence.
                  </p>
                  <div className="mt-4 py-2 border-t border-border/50 text-xs text-muted-foreground">
                    Accessible for Gartner customers
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="modal-card h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-4 w-10 h-10 rounded-full flex items-center justify-center bg-primary/20">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="#3FC186" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Important and Compelling Innovations in the Analytics and BI Platform Market</h3>
                  <div className="text-sm text-muted-foreground mb-4">
                    <p>Published 22 January 2022</p>
                    <p>By Kevin Quinn, Jim Hare</p>
                  </div>
                  <p className="text-sm text-muted-foreground flex-grow">
                    Read more about How Augmented Analytics is filling the void that BI solutions left.
                  </p>
                  <div className="mt-4 py-2 border-t border-border/50 text-xs text-muted-foreground">
                    Accessible for Gartner customers
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
