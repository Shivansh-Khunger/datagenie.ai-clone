'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Background grid and effects */}
      <div className="absolute inset-0 modal-grid opacity-20 z-0" />
      <div className="hero-blur left-1/4 top-1/4 z-0" />
      <div className="hero-blur right-1/4 bottom-1/3 z-0" />
      
      {/* Video background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <div className="relative w-full h-full" style={{ transformStyle: 'preserve-3d' }}>
          <video 
            disablePictureInPicture 
            className="absolute w-full h-full object-cover" 
            poster="/hero-video-poster.webp" 
            loop 
            playsInline 
            autoPlay
            muted
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
      </div>

      <div className="container relative z-10 pt-32 lg:pt-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Serve custom AI <br />
              models <span className="text-primary">at scale</span>
            </motion.h1>

            <motion.p
              className="text-xl text-muted-foreground max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Add one line of code to run any function in the cloud. Get instant autoscaling for ML inference, data jobs, and more.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button asChild size="lg" className="modal-button rounded-full">
                <Link href="/book-a-demo">
                  Get Started
                </Link>
              </Button>
              
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-transparent hover:text-primary rounded-full">
                <Link href="/book-a-demo">
                  Book a Demo
                </Link>
              </Button>
            </motion.div>

            <motion.div
              className="flex flex-col"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <p className="text-sm font-medium mb-2">Trusted by data leaders</p>
              <div className="flex flex-wrap gap-6 items-center">
                <Image
                  src="https://ext.same-assets.com/1434001824/4294214172.png"
                  alt="Partners"
                  width={180}
                  height={30}
                  className="opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            </motion.div>
          </div>

          {/* Right side content with description */}
          <div className="relative">
            <motion.div
              className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-primary/20 max-w-md"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-lg text-white">
                Add one line of code to run any function in the<br/>
                cloud. Get instant autoscaling for ML inference,<br/>
                data jobs, and more.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
