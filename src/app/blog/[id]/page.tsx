import BlogDetail from "@/components/BlogDetail/BlogDetail"

interface Props { params: { id: string } }

export async function generateMetadata({ params }: Props) {
    const res = await fetch(`https://dummyjson.com/c/a7c4-016a-47aa-8241`)
    const data = await res.json()
    const filteredData = data?.find((item: any) => item.attributes.slug === params.id)

    return {
        title: filteredData?.attributes.seo.metaTitle ?? "Varsayılan Başlık",
        description: filteredData?.attributes.seo.metaDescription ?? "Varsayılan description",
        alternates: {
            canonical: `https://codezone-recep.netlify.app/blog/${filteredData?.attributes.seo.canonicalURL ?? params.id}`
        }
    }
}

export default async function Page({ params }: Props) {
    const res = await fetch(`https://dummyjson.com/c/a7c4-016a-47aa-8241`)
    const data = await res.json()
    const filteredData = data?.find((item: any) => item.attributes.slug === params.id)

    const filteredDataPlain = filteredData ? JSON.parse(JSON.stringify(filteredData)) : null
    const dataPlain = data ? JSON.parse(JSON.stringify(data)) : []

    return <BlogDetail data={dataPlain} filteredData={filteredDataPlain} />
}
