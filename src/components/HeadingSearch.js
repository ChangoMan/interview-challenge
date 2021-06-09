import PropTypes from 'prop-types'
import React from 'react'
import { Flex, Heading, Image, Input } from 'theme-ui'

HeadingSearch.propTypes = {
  dispatch: PropTypes.func.isRequired,
  searchQuery: PropTypes.string,
}

function HeadingSearch({ dispatch, searchQuery }) {
  return (
    <Flex sx={{ alignItems: 'center', mb: 8 }}>
      <Heading as="h1">Epochs</Heading>
      <Flex sx={{ ml: 3, pl: 3, borderLeft: '1px solid rgba(255,255,255,0.25)' }}>
        <Image src="/images/Search.svg" />
        <Input
          sx={{
            border: 'none',
            fontSize: 1,
            fontWeight: 400,
            fontFamily: 'body',
            '&:focus': {
              outline: 'none',
            },
            '&::placeholder': {
              color: 'rgba(255,255,255,0.48)',
              fontSize: 1,
              fontWeight: 400,
              fontFamily: 'body',
            },
          }}
          value={searchQuery}
          placeholder="Search"
          onChange={(e) => {
            dispatch({
              type: 'SEARCH',
              searchQuery: e.target.value,
            })
          }}
        />
      </Flex>
    </Flex>
  )
}

export default HeadingSearch
