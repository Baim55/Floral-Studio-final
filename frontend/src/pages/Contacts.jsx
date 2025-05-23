import React from 'react'
import {Helmet} from "react-helmet";

const Contacts = () => {
  return (
    <div>Contacts
       <Helmet>
                <meta charSet="utf-8" />
                <title>Contacts</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
    </div>
  )
}

export default Contacts