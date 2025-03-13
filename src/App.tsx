import { AppLayout } from "@layouts/index";
import { AppRouter } from "./router";
import { GithubMembersOrganizationProvider } from "@contexts/GithubMembersContext";

export const App = () => {
    return <>
        <AppLayout>
            <GithubMembersOrganizationProvider>
                <AppRouter />
            </GithubMembersOrganizationProvider>
        </AppLayout>
    </>
};