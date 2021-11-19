import { useLazyQuery } from '@apollo/client';
import { GetUserById } from '../graphql/query';
import { GetSub } from '../graphql/subscription';

export default function useGetPassenger() {
    const [
        getPassengerId,
        {
            error: errorPassengerId,
            loading: loadingPassengerId,
            data: dataPassengerId,
            subscribeToMore
        }
    ] = useLazyQuery(GetUserById);

    const subscribePassengerId = () => {
        subscribeToMore({
            document: GetSub,
            updateQuery: (prev, { subscriptionData: {dataPassengerId} }) => {
                return dataPassengerId;
            }
        })
    }
    
    return { getPassengerId, errorPassengerId, loadingPassengerId, dataPassengerId, subscribePassengerId };
}