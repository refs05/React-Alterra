import { useMutation } from "@apollo/client";
import { UpdatePassenger } from "../graphql/mutation";

export default function useEditPassenger() {
    const [editPassenger, {loading: loadingEdit}] = useMutation(UpdatePassenger);

    return { editPassenger, loadingEdit };
}