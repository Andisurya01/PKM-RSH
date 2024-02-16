import CardSearch from "../Card/CardSearch";

export default function Searching() {
    return (
        <section className="max-w-screen-xl mx-auto">
            <h1 className="font-bold text-5xl text-center py-20">Cari Tempat Penelitian Anda</h1>
            <div className="bg-gray-50 flex rounded-full px-6">
                <img className="pr-6 w-12" src="/icon/search.svg"></img>
                <input className="bg-gray-50 w-full py-5 outline-none border-none" type="text" placeholder="cari"></input>
                <div>
                    <img className="w-12" src="/icon/filter.svg"></img>
                </div>
            </div>
            <div className="flex gap-5 justify-between py-10">
                <CardSearch />
                <CardSearch />
                <CardSearch />
            </div>
        </section>
    )
}