import Appstore_link from "@/app/components/appstore_link";
import Playstore_link from "@/app/components/playstore_link";
import Github_link from "@/app/components/github_link";

export default function Home() {
  return (
    <main>
      <div>
          <p>Julian Schumacher</p>
          <Appstore_link></Appstore_link>
          <Playstore_link></Playstore_link>
          <Github_link></Github_link>
      </div>
    </main>
  )
}