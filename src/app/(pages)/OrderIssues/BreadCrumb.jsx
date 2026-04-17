import Link from "next/link"

export default function BreadCrumb() {
    return (
        <div className="text-xs sm:text-sm text-gray-500 mb-6 sm:mb-8 flex flex-wrap gap-1">
            <Link href="/OrderDetails" className="hover:underline">Order Details /</Link>
            <span className="text-black font-semibold underline">Order Issues</span>
        </div>
    )
}