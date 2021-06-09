/** @jsxImportSource theme-ui */
import Link from 'next/link'
import PropTypes from 'prop-types'
import { Box, Flex, Image } from 'theme-ui'
import TableCellBigNumber from '../components/TableCellBigNumber'

Table.propTypes = {
  dispatch: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  orderBy: PropTypes.string.isRequired,
  orderDirection: PropTypes.string.isRequired,
}

const COLUMNS = [
  {
    id: 'id',
    title: 'Epoch',
  },
  {
    id: 'startBlock',
    title: 'Start Block',
  },
  {
    id: 'endBlock',
    title: 'End Block',
  },
  {
    id: 'queryFeeRebates',
    title: 'Query Fees',
  },
  {
    id: 'totalRewards',
    title: 'Total Rewards',
  },
]

function Table({ dispatch, data, orderBy, orderDirection }) {
  return (
    <Box
      sx={{
        width: '100%',
        overflowX: 'auto',
      }}
    >
      <table
        sx={{
          width: 'full',
          '& thead > tr > th, & tbody > tr > td': {
            p: 5,
            minWidth: '200px',
          },
          '& tbody > tr > td': {
            color: 'tableText',
          },
        }}
      >
        <thead>
          <tr>
            {COLUMNS.map((column) => {
              const isOrderBy = column.id === orderBy
              let directionImage = 'Direction-Down.svg'
              if (isOrderBy) {
                directionImage =
                  orderDirection === 'asc' ? 'Direction-Down.svg' : 'Direction-Up.svg'
              }
              return (
                <th
                  sx={{
                    borderBottom: '2px solid',
                    borderColor: isOrderBy ? 'tableText' : 'rgba(255,255,255,0.16)',
                    color: isOrderBy ? 'white' : 'tableText',
                    cursor: 'pointer',
                    fontSize: '10px',
                    fontWeight: 500,
                    letterSpacing: '1.2px',
                    textTransform: 'uppercase',
                    '&:hover': {
                      color: 'white',
                      borderColor: 'tableText',
                    },
                  }}
                  key={column.id}
                  onClick={() => {
                    dispatch({
                      type: 'SET_ORDER_BY',
                      orderBy: column.id,
                    })
                  }}
                >
                  <Flex sx={{ alignItems: 'center' }}>
                    {column.title}{' '}
                    <Image
                      sx={{
                        ml: 2,
                        visibility: isOrderBy ? 'visible' : 'hidden',
                        'th:hover &': {
                          visibility: 'visible',
                        },
                      }}
                      src={`/images/${directionImage}`}
                    />
                  </Flex>
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((epoch) => {
            return (
              <tr
                sx={{
                  borderBottom: '1px solid rgba(255,255,255,0.08)',
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.01)',
                  },
                }}
                key={epoch.id}
              >
                <td>{epoch.id}</td>
                <td>#{epoch.startBlock}</td>
                <td>#{epoch.endBlock}</td>
                <td>
                  <TableCellBigNumber bigNumber={epoch.queryFeeRebates} />
                </td>
                <td>
                  <Flex sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
                    <TableCellBigNumber bigNumber={epoch.totalRewards} />
                    <Link href={`/epoch/${epoch.id}`}>
                      <a
                        sx={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '40px',
                          height: '40px',
                          my: -5,
                          bg: 'rgba(111,76,255,0.16)',
                          border: 'none',
                          borderRadius: '50%',
                          visibility: 'hidden',
                          'tr:hover &': {
                            visibility: 'visible',
                          },
                          '&:hover': {
                            bg: 'arrowButtonHover',
                          },
                        }}
                      >
                        <Image
                          sx={{
                            transform: 'rotate(-90deg)',
                          }}
                          src="/images/Direction-Down.svg"
                        />
                      </a>
                    </Link>
                  </Flex>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </Box>
  )
}

export default Table
