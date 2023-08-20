import * as React from "react"
import ImageGallery from "../components/gallery"
import Header from "../components/header";
import './index.scss';

const IndexPage = () => {
  return (
    <main>
     <Header />
     <ImageGallery />
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Linda Thithavong</title>
