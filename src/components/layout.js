import React from "react"
import {Helmet} from "react-helmet";
import {MDXProvider} from "@mdx-js/react";
import {Link} from "gatsby";

const components = {}

export default function Layout({children}) {
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cloud.typography.com/6728436/7873432/css/fonts.css"
        />
      </Helmet>
      <header>
        <div className="container py-6">
          <nav className="flex justify-center gap-4 font-idealSans">
            <Link to={`/blog`}>Blog</Link>
            <Link to={`/archive`}>Archive</Link>
            <Link to={`/photos`}>Photos</Link>
          </nav>
        </div>
      </header>
      <MDXProvider components={components}>
        {children}
      </MDXProvider>
    </>
  );
}