import Image from "next/image"

function SidebarRow({src,Icon,title}) {
    return (
        <div className="flex items-center space-x-2 p-4 hover:bg-gray-100  hover:scale-105 hover:anime-pulse">
            {src && (
                <Image
                className="rounded-full"
                src={src}
                width={30}
                height={30}
                layout="fixed"
                />
            )}
            {Icon && (
                <Icon className="h-8 w-8 text-blue-500"/>
            )}
            <p className="hidden sm:inline-flex foot-medium">{title}</p>
        </div>
    )
}

export default SidebarRow
