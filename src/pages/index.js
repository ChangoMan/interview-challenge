import { useQuery } from '@apollo/client'
import { useReducer } from 'react'
import { Alert, Button, Flex } from 'theme-ui'
import { withApollo } from '../apollo/client'
import { EPOCHES_QUERY } from '../apollo/queries'
import HeadingSearch from '../components/HeadingSearch'
import Table from '../components/Table'

const initialState = {
  searchQuery: '',
  paginationNumber: 3,
  orderBy: 'startBlock',
  orderDirection: 'asc',
}

function reducer(state, action) {
  switch (action.type) {
    case 'SEARCH':
      return {
        ...state,
        searchQuery: action.searchQuery,
      }
    case 'SET_ORDER_BY': {
      let newOrderDirection = 'asc'
      if (state.orderBy === action.orderBy) {
        newOrderDirection = state.orderDirection === 'asc' ? 'desc' : 'asc'
      }
      return {
        ...state,
        orderBy: action.orderBy,
        orderDirection: newOrderDirection,
      }
    }
    case 'LOAD_MORE':
      return {
        ...state,
        paginationNumber: state.paginationNumber + 3,
      }
    default:
      throw new Error()
  }
}

function formatSearchQuery(searchQuery) {
  if (searchQuery) {
    const searchQueryInt = parseInt(searchQuery)
    if (isNaN(searchQueryInt)) {
      return {
        startBlock: null,
      }
    }
    return {
      startBlock: searchQueryInt,
    }
  }
  return {}
}

const Index = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const { searchQuery, paginationNumber, orderBy, orderDirection } = state

  const { loading, error, data } = useQuery(EPOCHES_QUERY, {
    variables: {
      where: formatSearchQuery(searchQuery),
      first: paginationNumber,
      orderBy,
      orderDirection,
    },
  })

  return (
    <>
      <HeadingSearch dispatch={dispatch} searchQuery={searchQuery} />
      {error && <Alert>Error</Alert>}
      {loading && <Alert>Loading...</Alert>}
      {!loading && !error && (
        <>
          <Table
            dispatch={dispatch}
            data={data?.epoches || []}
            orderBy={orderBy}
            orderDirection={orderDirection}
          />
          <Flex sx={{ mt: 9, justifyContent: 'center' }}>
            <Button
              onClick={() => {
                dispatch({
                  type: 'LOAD_MORE',
                })
              }}
            >
              Load More
            </Button>
          </Flex>
        </>
      )}
    </>
  )
}

export default withApollo(Index, { ssr: false })
