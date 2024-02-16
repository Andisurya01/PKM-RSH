export default function CardSearch() {
    return (
        <div className="bg-gray-100 w-full rounded-xl px-5 py-4">
            <h1 className="font-semibold text-xl">Judul Penelitian</h1>
            <div className="flex pb-5 justify-between items-center">
                <p className="text-sm">tempat</p>
                <div className="flex items-center ">
                    <img src="/icon/star.svg"></img>
                    <p className="text-sm">4.5</p>
                </div>
            </div>
            <img className="rounded-lg" src="/image/bg.png"></img>
        </div>
    )
}