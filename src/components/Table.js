/** @jsxImportSource theme-ui */
import PropTypes from 'prop-types'
import { Box } from 'theme-ui'

Table.propTypes = {
  data: PropTypes.array.isRequired,
}

const COLUMNS = [
  {
    id: 'epoch',
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
    id: 'queryFees',
    title: 'Query Fees',
  },
  {
    id: 'totalRewards',
    title: 'Total Rewards',
  },
]

function formatBigNumber(bigNumber) {
  return Math.round(bigNumber / Math.pow(10, 18))
}

function Table({ data }) {
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
            p: '20px',
            minWidth: '200px',
          },
        }}
      >
        <thead>
          <tr
            sx={{
              borderBottom: '2px solid rgba(255,255,255,0.3)',
            }}
          >
            {COLUMNS.map((column) => {
              return (
                <th
                  sx={{
                    fontSize: 0,
                    fontWeight: 1,
                    textTransform: 'uppercase',
                  }}
                  key={column.id}
                >
                  {column.title}
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
                  borderBottom: '1px solid rgba(255,255,255,0.1)',
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.01)',
                  },
                }}
                key={epoch.id}
              >
                <td>{epoch.id}</td>
                <td>{epoch.startBlock}</td>
                <td>{epoch.endBlock}</td>
                <td>{formatBigNumber(epoch.queryFeeRebates)}</td>
                <td>{formatBigNumber(epoch.totalRewards)}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </Box>
  )
}

export default Table
