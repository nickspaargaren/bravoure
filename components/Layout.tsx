import React from "react"
import { Helmet } from "react-helmet";
import GlobalStyle from '../styles/globalStyles';


interface LayoutProps {
  children: any,
  title: string,
  description: string
}

const Layout = (props: LayoutProps) => {


  return (
    <>
      <GlobalStyle />
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
      </Helmet>
      {props.children}
    </>
  )
}

export default  Layout