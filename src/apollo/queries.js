import { gql } from 'apollo-boost'

export const EPOCHES_QUERY = gql`
  query epoches(
    $where: Epoch_filter
    $first: Int
    $orderBy: Epoch_orderBy
    $orderDirection: OrderDirection
  ) {
    epoches(
      where: $where
      first: $first
      orderBy: $orderBy
      orderDirection: $orderDirection
    ) {
      id
      startBlock
      endBlock
      queryFeeRebates
      totalRewards
    }
  }
`
