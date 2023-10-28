import SideNav from "./components/SideNav";

export default function Dashboard() {
    return (
        <>
            <div className="flex flex-row">
                {/* <SideNav />
                {preferences === 0 && <PreferencesScreening />}
                <div>
                    {tab === "settings" && <Settings accounts={accounts} />}
                    {tab === "profile" && <p>Profile</p>}
                    {tab === "matches" && <Matches accounts={accounts} />}
                </div> */}
                <SideNav />
            </div>
        </>
    )
}