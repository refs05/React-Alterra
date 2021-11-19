import { useSubscription } from "@apollo/client";
import { GetSub } from "../graphql/subscription";

export default function useSubsPassenger() {
    const {
        data: dataSubsPassenger,
        loading: loadingSubsPassenger,
        error: errorSubsPassenger
    } = useSubscription(GetSub);
    
    return { dataSubsPassenger, loadingSubsPassenger, errorSubsPassenger };
}