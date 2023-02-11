import Layout from "../../components/src/Layout/Layout"
import { HomeContainer } from "../../containers"
import { ReactMemoEx } from "../../modules/view"

export const HomePage: React.FC = ReactMemoEx(() =>  {
    return (
        <Layout >
            <HomeContainer />
        </Layout>
    )
})
