/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Laptop, Smartphone, User, Mail } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link
          className="flex items-center justify-center"
          href="#"
        >
          <Laptop className="h-6 w-6" />
          <span className="sr-only">Acme Web Services</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#services"
          >
            Services
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#about"
          >
            About
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#contact"
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Web Solutions for Every Need
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  From enterprise-level applications to personal portfolios, we
                  bring your digital vision to life.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild>
                  <Link href="#contact">Get Started</Link>
                </Button>
                <Button
                  variant="outline"
                  asChild
                >
                  <Link href="#services">Our Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section
          id="services"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl text-black font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Our Services
            </h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <Smartphone className="w-8 h-8 mb-2" />
                  <CardTitle>App Development</CardTitle>
                  <CardDescription>
                    Custom mobile applications for iOS and Android platforms.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Laptop className="w-8 h-8 mb-2" />
                  <CardTitle>Web Development</CardTitle>
                  <CardDescription>
                    Responsive and dynamic websites for businesses of all sizes.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <User className="w-8 h-8 mb-2" />
                  <CardTitle>Personal Websites</CardTitle>
                  <CardDescription>
                    Stunning portfolios and personal sites to showcase your
                    work.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>
        <section
          id="about"
          className="w-full py-12 md:py-24 lg:py-32"
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <img
                alt="Team meeting"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height="310"
                src="https://5256430.fs1.hubspotusercontent-na1.net/hub/5256430/hubfs/images/blog/run-an-effective-team-meeting.png?width=1000&name=run-an-effective-team-meeting.png"
                width="550"
              />
              <div className="flex flex-col justify-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  About Us
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We&apos;re a team of passionate developers and designers
                  dedicated to creating exceptional digital experiences. With
                  years of experience in the industry, we bring expertise and
                  innovation to every project.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl text-black font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Featured Projects
            </h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>E-commerce Platform</CardTitle>
                  <CardDescription>
                    A full-featured online store for a major retail brand.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    alt="E-commerce project"
                    className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                    height="310"
                    src="/placeholder.svg?height=310&width=550"
                    width="550"
                  />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Portfolio Website</CardTitle>
                  <CardDescription>
                    A sleek portfolio for a professional photographer.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    alt="Portfolio project"
                    className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                    height="310"
                    src="/placeholder.svg?height=310&width=550"
                    width="550"
                  />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Mobile App</CardTitle>
                  <CardDescription>
                    A fitness tracking app with social features.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    alt="Mobile app project"
                    className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                    height="310"
                    src="/placeholder.svg?height=310&width=550"
                    width="550"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Let&apos;s Build Something Amazing
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl">
                  Ready to start your project? Get in touch with us today for a
                  free consultation.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col space-y-4">
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Your email"
                    type="email"
                  />
                  <textarea
                    className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Tell us about your project"
                  />
                  <Button type="submit">
                    <Mail className="mr-2 h-4 w-4" /> Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">
          © 2023 Acme Web Services. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-xs hover:underline underline-offset-4"
            href="#"
          >
            Terms of Service
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4"
            href="#"
          >
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
