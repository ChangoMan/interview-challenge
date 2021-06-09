import { useQuery } from '@apollo/client'
import { useReducer } from 'react'
import { Box, Button, Flex } from 'theme-ui'
import { withApollo } from '../apollo/client'
import { EPOCHES_QUERY } from '../apollo/queries'
import HeadingSearch from '../components/HeadingSearch'
import Table from '../components/Table'

const initialState = {
  searchQuery: null,
  paginationNumber: 3,
  orderBy: 'startBlock',
  orderDirection: 'asc',
}

function reducer(state, action) {
  switch (action.type) {
    case 'SET_SEARCH_QUERY':
      return {
        ...state,
        searchQuery: action.searchQuery,
      }
    default:
      throw new Error()
  }
}

const Index = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const { searchQuery, paginationNumber, orderBy, orderDirection } = state

  const { loading, error, data } = useQuery(EPOCHES_QUERY, {
    variables: {
      // where: {
      //   startblock: searchQuery,
      // },
      first: paginationNumber,
      orderBy,
      orderDirection,
    },
  })

  return (
    <Box
      sx={{
        height: '100vh',
        backgroundImage: 'url("/images/Background.jpg")',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center top',
        backgroundSize: 'cover',
      }}
    >
      <Box sx={{ maxWidth: '90%', mx: 'auto', px: 7, py: '100px' }}>
        <HeadingSearch dispatch={dispatch} />
        <Table dispatch={dispatch} data={data?.epoches || []} />
        <Flex sx={{ mt: 9, justifyContent: 'center' }}>
          <Button>Load More</Button>
        </Flex>
      </Box>
    </Box>
  )
}

export default withApollo(Index, { ssr: false })
