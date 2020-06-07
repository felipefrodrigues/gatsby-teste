import React from "react"
import './styles.css'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const IndexPage = () => {
  const data = useStaticQuery(graphql `
    {
      jobs: allStrapiHomes {
        nodes {
          subtitulo
          tipo
          titulo
          id
          ativo
          image {
            childImageSharp {
              fluid {
                src
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          overflow: "auto",
          height: "1000px"
        }}>
        {
          data.jobs.nodes.map(node => (
            <BackgroundImage
              key={node.id}
              fluid={node.image.childImageSharp.fluid}
              style={{
                width: "50%",
                color: "white",
              }}
              >
              <h3>{node.titulo}</h3>
              <h1>{node.subtitulo}</h1>
            </BackgroundImage>
          ))
        }
      </div>
    </Layout>
  )
}

export default IndexPage
