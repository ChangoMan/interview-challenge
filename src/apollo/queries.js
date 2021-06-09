import { gql } from 'apollo-boost'

export const EPOCHES_QUERY = gql`
  query EpochesAndFilters(
    $where: Epoch_filter
    $first: Int = 3
    $orderBy: Epoch_orderBy = "startBlock"
    $orderDirection: OrderDirection = "asc"
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
