import Image from 'next/image'
import prisma from '@/lib/prisma'
import Link from 'next/link'

async function Products() {
  const data = await prisma.products.findMany()

  const mappedData = data.map((item) => {
    return item
  })

  return(
    <ul>
      {mappedData.map((contents) => {
        return <li key={contents.id}>
          <Link href={`/products/${contents.id}`}>{contents.Items}</Link>
        </li>
      })}
    </ul>
  )
  
}

export default function Home() {
  return (
   <section>
    <h1> All products</h1>
    <Products/>
   </section>
  )
}
