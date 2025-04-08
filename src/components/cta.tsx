'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      <div className="absolute inset-0 modal-grid opacity-10" />
      <div className="hero-blur left-1/3 top-1/2" />
      <div className="hero-blur right-1/3 bottom-1/4" />

      <div className="container relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Experience to Believe!
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            DataGenie is more than just another analytics tool - it's a transformative experience that propels your business forward. See how our intelligent insights can drive growth for your organization. Get started today with a free demo.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="modal-button">
              <Link href="/book-a-demo">
                Book a Demo
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
              <Link href="/contact-us">
                Contact Us
              </Link>
            </Button>
          </div>
        </motion.div>

        <div className="mt-20">
          <div className="text-center mb-10">
            <p className="text-sm font-medium text-muted-foreground">Our success metrics</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0 }}
            >
              <p className="text-4xl font-bold text-primary mb-2">90%</p>
              <p className="text-sm text-muted-foreground">Faster time to insights</p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <p className="text-4xl font-bold text-primary mb-2">70%</p>
              <p className="text-sm text-muted-foreground">Reduction in data analysis time</p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <p className="text-4xl font-bold text-primary mb-2">3x</p>
              <p className="text-sm text-muted-foreground">More actionable insights</p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <p className="text-4xl font-bold text-primary mb-2">100%</p>
              <p className="text-sm text-muted-foreground">Customer satisfaction</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
