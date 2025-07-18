export async function getDataHome() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/objects/68521bf57ef3013f48e43f3a?pretty=true&read_key=${process.env.NEXT_PUBLIC_READ_KEY}&depth=1&props=slug,title,metadata,type`)

        if (!res.ok) {
            throw new Error("Failed to fetch data")
        }

        return res.json();
    } catch {
        throw new Error("Failed to fetch data")
    }
}