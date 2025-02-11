"use client";
import { Navbar, Button } from "flowbite-react";

export default function NavBar() {
    const NavbarLinks=[{title:'Discover Event Highlights', href:'#'}, {title:'Explore Ticket Options', href:'#'}, {title:'Join as a Partner', href:'#'}, {title:'Get in Touch', href:'#'}]
    return (
      <><Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com" >
        <img src="/images/rising-riyadh-logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
      </Navbar.Brand>
      <div className="flex md:order-2 bg-red-500">
        <Button >Register Now</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        {NavbarLinks.map((item, index) => (<Navbar.Link href="#" key={index}>{item.title}</Navbar.Link>))}
      </Navbar.Collapse>
    </Navbar></>
      );
  }
  