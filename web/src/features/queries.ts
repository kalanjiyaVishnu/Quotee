import { gql } from "@apollo/client";
export const GET_ME = gql`
  query ($meId: String!) {
    ME(id: $meId) {
      userName
    }
  }
`;
