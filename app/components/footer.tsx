// import Link from "next/link";
// import React from "react";

// const Footer = () => {
//   const year = new Date().getFullYear();

//   return (
//     <footer className="p-9 h-[50vh] max-w-full ">
//       <article className="flex items-center  gap-50 justify-between ">
//         <section className="flex flex-colp-2">
//           <p className="text-3xl cursor-pointer">Rabia Solution</p>
//         </section>
//         <section className="flex flex-col cursor-pointer gap-6">
//           <p className="font-bold ">Connect With</p>
//           <Link href="/linkedin.com">Linkedin</Link>
//           <Link href="/linkedin.com">Github</Link>
//           <Link href="/linkedin.com">Instagram</Link>
//         </section>
//         <section className="flex flex-col cursor Poiner gap-6 ">
//           <p className="font-bold ">Follow Us</p>
//           <Link href="/linkedin.com">Linkedin</Link>
//           <Link href="/linkedin.com">Github</Link>
//           <Link href="/linkedin.com">Instagram</Link>
//         </section>
//         <section className="flex flex-col cursor Poiner gap-6 ">
//           <p className="font-bold ">Stay Update</p>
//           <Link href="/linkedin.com">Linkedin</Link>
//           <Link href="/linkedin.com">Github</Link>
//           <Link href="/linkedin.com">Instagram</Link>
//         </section>
//       </article>
//       <p>© {year} Rabia Solutions. All rights reserved.</p>
//     </footer>
//   );
// };

// export default Footer;
import Link from "next/link";
import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="p-9 bg-gray-100 text-gray-700">
      <article className="flex flex-col md:flex-row md:justify-between gap-10 max-w-7xl mx-auto">
        {/* Logo Section */}
        <section className="flex flex-col gap-2">
          <p className="text-2xl font-bold cursor-pointer">Rabia Solutions</p>
          <p className="text-sm text-gray-500">
            Empowering Software Excellence
          </p>
        </section>

        {/* Repeated Section */}
        {[
          { title: "Connect With", links: ["Linkedin", "Github", "Instagram"] },
          { title: "Follow Us", links: ["Linkedin", "Github", "Instagram"] },
          { title: "Stay Updated", links: ["https://www.linkedin.com/in/ahmed-rabia-1814b0323/", "Github", "Instagram"] },
        ].map(({ title, links }, i) => (
          <section key={i} className="flex flex-col gap-2">
            <p className="font-bold mb-2">{title}</p>
            {links.map((link, j) => (
              <Link
                key={j}
                href={`${link.toLowerCase()}`}
                target="_blank"
                className="hover:underline text-sm text-blue-600"
              >
                {link}
              </Link>
            ))}
          </section>
        ))}
      </article>

      {/* Copyright */}
      <div className="mt-10 text-center text-sm text-gray-500">
        © {year} Rabia Solutions. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
