import BlogDetail from "@/components/BlogDetail/BlogDetail"

export async function generateMetadata({ params }: { params: any }) {
    const id = Array.isArray(params.id) ? params.id[0] : params.id;
    const res = await fetch('https://dummyjson.com/c/a7c4-016a-47aa-8241');
    const data = await res.json();
    const filteredData = data?.find((item: any) => item.attributes.slug === id);

    return {
        title: filteredData?.attributes.seo.metaTitle ?? "Varsayılan Başlık",
        description: filteredData?.attributes.seo.metaDescription ?? "Varsayılan description",
        alternates: {
            canonical: `https://codezone-recep.netlify.app/blog/${filteredData?.attributes.seo.canonicalURL ?? id}`
        }
    }
}

export default async function Page({ params }: { params: any }) {
    const id = Array.isArray(params.id) ? params.id[0] : params.id;
    const res = await fetch('https://dummyjson.com/c/a7c4-016a-47aa-8241');
    const data = await res.json();
    const filteredData = data?.find((item: any) => item.attributes.slug === id);

    const filteredDataPlain = filteredData ? JSON.parse(JSON.stringify(filteredData)) : null;
    const dataPlain = data ? JSON.parse(JSON.stringify(data)) : [];

    return <BlogDetail data={dataPlain} filteredData={filteredDataPlain} />
}