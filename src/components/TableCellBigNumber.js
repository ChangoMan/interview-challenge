import PropTypes from 'prop-types'
import React from 'react'
import { Box, Flex } from 'theme-ui'

TableCellBigNumber.propTypes = {
  bigNumber: PropTypes.string.isRequired,
}

function formatBigNumber(bigNumber) {
  return Math.round(bigNumber / Math.pow(10, 18))
}

function TableCellBigNumber({ bigNumber }) {
  return (
    <Flex sx={{ alignItems: 'center' }}>
      {formatBigNumber(bigNumber)}{' '}
      <Box as="span" sx={{ ml: 2, fontSize: '10px' }}>
        GRT
      </Box>
    </Flex>
  )
}

export default TableCellBigNumber
