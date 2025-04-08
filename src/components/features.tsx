'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

const FeatureCard = ({
  icon,
  title,
  description,
  image,
  color = "#3FC186"
}: {
  icon: React.ReactNode,
  title: string,
  description: string,
  image: string,
  color?: string
}) => (
  <Card className="modal-card overflow-hidden group">
    <CardHeader className="p-6">
      <div className="mb-4 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: `${color}20` }}>
        {icon}
      </div>
      <CardTitle className="text-xl">{title}</CardTitle>
      <CardDescription className="text-muted-foreground">{description}</CardDescription>
    </CardHeader>
    <CardContent className="p-0 overflow-hidden">
      <div className="relative h-56 w-full transform transition-transform duration-300 group-hover:scale-105">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
    </CardContent>
  </Card>
);

export function Features() {
  const featureVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      },
    }),
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="hero-blur -left-1/4 top-1/2" />
      <div className="container relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">DataGenie in Action</h2>
          <p className="text-lg text-muted-foreground">
            Discover how DataGenie transforms your data into actionable insights that drive business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={featureVariants}
          >
            <FeatureCard
              icon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 5C4 4.44772 4.44772 4 5 4H19C19.5523 4 20 4.44772 20 5V7C20 7.55228 19.5523 8 19 8H5C4.44772 8 4 7.55228 4 7V5Z" stroke="#3FC186" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 13C4 12.4477 4.44772 12 5 12H11C11.5523 12 12 12.4477 12 13V19C12 19.5523 11.5523 20 11 20H5C4.44772 20 4 19.5523 4 19V13Z" stroke="#3FC186" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 13C16 12.4477 16.4477 12 17 12H19C19.5523 12 20 12.4477 20 13V19C20 19.5523 19.5523 20 19 20H17C16.4477 20 16 19.5523 16 19V13Z" stroke="#3FC186" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              }
              title="Log on to prioritized StoryCards"
              description="Get all relevant business insights from our autonomous StoryCards, prioritized by business impact."
              image="https://ext.same-assets.com/1434001824/3334016372.jpeg"
            />
          </motion.div>

          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={featureVariants}
          >
            <FeatureCard
              icon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#3FC186" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" stroke="#3FC186" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" stroke="#3FC186" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              }
              title="Key driver analysis"
              description="Automated key driver analysis to understand the Why. Get instant information on the contributors that effected the change in business."
              image="https://ext.same-assets.com/1434001824/3924254902.jpeg"
            />
          </motion.div>

          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={featureVariants}
          >
            <FeatureCard
              icon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 15C4 15 5 14 8 14C11 14 13 16 16 16C19 16 20 15 20 15V3C20 3 19 4 16 4C13 4 11 2 8 2C5 2 4 3 4 3V15Z" stroke="#3FC186" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 22V15" stroke="#3FC186" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              }
              title="Forecast Business Impact"
              description="An intuitive, on-demand KPI forecaster you can rely on. Perform scenario analysis to determine what levers to change to achieve required business goals."
              image="https://ext.same-assets.com/1434001824/4213991651.jpeg"
            />
          </motion.div>
        </div>

        <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Contextual & self-service<br />
              <span className="text-primary">insights that your team<br />
              can appreciate & act upon</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              DataGenie makes the "Power of Now" an absolute reality for your business users. With one time analyst involvement, DataGenie learns your use case, and replicates the analyst's work at scale. Move from a Data Driven Business to an Insights Driven Business by choosing DataGenie!
            </p>
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <Link href="/overview">More...</Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <Card className="modal-card">
              <CardHeader>
                <div className="mb-2 w-10 h-10 rounded-full flex items-center justify-center bg-primary/20">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 8L3 12L7 16" stroke="#3FC186" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17 8L21 12L17 16" stroke="#3FC186" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14 4L10 20" stroke="#3FC186" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <CardTitle className="text-base">From Business Intelligence to Augmented Intelligence</CardTitle>
                <CardDescription>
                  With conventional BI, your analysts PULL insights from multiple dashboards. DataGenie autonomously PUSHes insights directly to your Business Users.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="modal-card">
              <CardHeader>
                <div className="mb-2 w-10 h-10 rounded-full flex items-center justify-center bg-primary/20">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z" stroke="#3FC186" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 12L12 8" stroke="#3FC186" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 12L16.5 16.5" stroke="#3FC186" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 9L12 12" stroke="#3FC186" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <CardTitle className="text-base">Easily Fits into your data infrastructure</CardTitle>
                <CardDescription>
                  DataGenie connects to the same data sources your conventional BI tool connects to. DataGenie delivers insights in its portal and to your downstream tools like Slack, JIRA, PagerDuty.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="modal-card">
              <CardHeader>
                <div className="mb-2 w-10 h-10 rounded-full flex items-center justify-center bg-primary/20">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.7 6.3C14.9978 6.50557 15.3717 6.57517 15.7263 6.48734C16.0809 6.39951 16.3761 6.1628 16.54 5.85C16.6608 5.58162 16.662 5.27787 16.5434 5.00861C16.4248 4.73935 16.1966 4.52456 15.916 4.409C15.6354 4.29345 15.3179 4.27755 15.0247 4.36452C14.7315 4.45149 14.4848 4.63418 14.34 4.88C14.2261 5.09424 14.1938 5.33658 14.2483 5.56929C14.3028 5.80201 14.4409 6.00933 14.64 6.15L14.7 6.3Z" stroke="#3FC186" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M20.8002 8.7C21.0979 8.90557 21.4719 8.97517 21.8265 8.88734C22.181 8.79951 22.4763 8.5628 22.6402 8.25C22.761 7.98162 22.7622 7.67787 22.6436 7.40861C22.525 7.13935 22.2968 6.92456 22.0162 6.809C21.7356 6.69345 21.4181 6.67755 21.1249 6.76452C20.8317 6.85149 20.585 7.03418 20.4402 7.28C20.3262 7.49424 20.294 7.73658 20.3485 7.96929C20.403 8.20201 20.5411 8.40933 20.7402 8.55L20.8002 8.7Z" stroke="#3FC186" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 9.90002C3.26522 9.90002 3.51957 9.79467 3.70711 9.60713C3.89464 9.41959 4 9.16525 4 8.90002C4 8.6348 3.89464 8.38045 3.70711 8.19291C3.51957 8.00538 3.26522 7.90002 3 7.90002C2.73478 7.90002 2.48043 8.00538 2.29289 8.19291C2.10536 8.38045 2 8.6348 2 8.90002C2 9.16525 2.10536 9.41959 2.29289 9.60713C2.48043 9.79467 2.73478 9.90002 3 9.90002Z" stroke="#3FC186" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 17.4C3.26522 17.4 3.51957 17.2947 3.70711 17.1071C3.89464 16.9196 4 16.6652 4 16.4C4 16.1348 3.89464 15.8805 3.70711 15.6929C3.51957 15.5054 3.26522 15.4 3 15.4C2.73478 15.4 2.48043 15.5054 2.29289 15.6929C2.10536 15.8805 2 16.1348 2 16.4C2 16.6652 2.10536 16.9196 2.29289 17.1071C2.48043 17.2947 2.73478 17.4 3 17.4Z" stroke="#3FC186" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9.44019 17.3C9.59552 17.0679 9.66618 16.7946 9.64133 16.5224C9.61649 16.2502 9.49749 15.9938 9.30444 15.7955C9.11139 15.5973 8.85643 15.4671 8.58202 15.4249C8.30761 15.3828 8.02893 15.4308 7.79019 15.56C7.55145 15.6892 7.36732 15.8918 7.26627 16.1352C7.16521 16.3786 7.15329 16.6472 7.2323 16.8983C7.31132 17.1494 7.47627 17.3685 7.69861 17.5198C7.92094 17.6711 8.18574 17.7456 8.45019 17.73" stroke="#3FC186" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2.39984 9.03003L6.63984 5.78003" stroke="#3FC186" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9.65002 6.3501L12.4 3.6001" stroke="#3FC186" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15.4399 6.96997L17.5199 5.34997" stroke="#3FC186" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M20.7599 8.65991L22.2799 7.43991" stroke="#3FC186" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M13.3402 8.69995L18.0002 12.91" stroke="#3FC186" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14.4398 16.96L9.99976 17.29" stroke="#3FC186" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3.43994 12.21L3.85994 15.54" stroke="#3FC186" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <CardTitle className="text-base">Adapts to your business</CardTitle>
                <CardDescription>
                  DataGenie learns business context from your analyst as a one time brain dump, learns from your historical data and replicates the analysts work at scale. Insights are prioritized based on business impact.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="modal-card">
              <CardHeader>
                <div className="mb-2 w-10 h-10 rounded-full flex items-center justify-center bg-primary/20">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#3FC186" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15 9L9 15" stroke="#3FC186" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 9L15 15" stroke="#3FC186" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <CardTitle className="text-base">Secure</CardTitle>
                <CardDescription>
                  DataGenie is ISO 27001 certified. Its secure by design and does not store your raw data.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
